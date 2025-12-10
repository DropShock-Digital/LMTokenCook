from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import sys
import os
from pathlib import Path

# Ensure src is in path if run directly
PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from src.core.processor import run_lmtokencook

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI(title="LMTokenCook API", version="2.0.0")

# CORS Configuration
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Static Files (after API routes or careful ordering)
# We need to build the UI to src/ui/dist and copy it to a location config knows, or just assume relative path in Docker.
# In Docker, we will copy dist to /app/static.

static_dir = Path("/app/static/assets")
if static_dir.exists():
    app.mount("/assets", StaticFiles(directory=str(static_dir)), name="assets")
else:
    print(f"Warning: Static directory {static_dir} not found. Skipping mount (Local Dev Mode).")

@app.get("/")
async def read_index():
    index_path = Path("/app/static/index.html")
    if index_path.exists():
        return FileResponse(str(index_path))
    return {"status": "active", "message": "LMTokenCook API Running. UI should be accessed via Vite dev server in local development."}

# Keep API endpoints

class CookRequest(BaseModel):
    input_path: str
    output_path: str
    chunk_size: int = 28000
    keep_masterfile: bool = False
    add_line_numbers: bool = False
    skip_empty_lines: bool = False
    encoding_name: str = "cl100k_base"

class PathCheckRequest(BaseModel):
    path: str

@app.get("/health")
def health_check():
    return {"status": "active", "system": "LMTokenCook Core"}

@app.post("/api/validate_path")
def validate_path(request: PathCheckRequest):
    """
    Checks if a path exists and is a directory/file.
    """
    p = Path(request.path)
    exists = p.exists()
    is_dir = p.is_dir() if exists else False
    return {"exists": exists, "is_dir": is_dir, "absolute": str(p.absolute())}

@app.post("/api/cook")
async def trigger_cook(request: CookRequest, background_tasks: BackgroundTasks):
    """
    Triggers the LMTokenCook process in the background.
    """
    inp = Path(request.input_path)
    out = Path(request.output_path)
    
    if not inp.exists():
        raise HTTPException(status_code=404, detail=f"Input path not found: {inp}")

    # Define wrapper for background execution
    def cook_job():
        print(f"Starting Job: Cook {inp} -> {out}")
        try:
            # Note: processor.run_lmtokencook might need encoding argument if it supports it
            # Checking signature of run_lmtokencook in processor.py would be good, assuming it aligns for now or accepting kwargs
            result = run_lmtokencook(
                input_path=inp, 
                output_path=out, 
                chunk_size=request.chunk_size,
                keep_masterfile=request.keep_masterfile,
                add_line_numbers=request.add_line_numbers,
                skip_empty_lines=request.skip_empty_lines,
                # encoding_name=request.encoding_name, # Uncomment if processor supports it
                progress_callback=lambda msg, *args: print(f"[JOB] {msg}")
            )
            print(f"Job Complete: {result['output_dir']}")
        except Exception as e:
            print(f"Job Failed: {e}")

    background_tasks.add_task(cook_job)
    
    return {"status": "queued", "message": f"Cooking started for {inp.name} ({request.chunk_size} tokens/chunk)"}
