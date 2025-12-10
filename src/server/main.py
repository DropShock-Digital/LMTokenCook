from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import os

app = FastAPI()

# Enable CORS for Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5176"], # Vite Dev Ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Setup
DB_FILE = "stats.db"

def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS global_stats 
                 (id INTEGER PRIMARY KEY, tokens INTEGER, chunks INTEGER, runs INTEGER)''')
    # Init row if empty
    c.execute("SELECT * FROM global_stats WHERE id=1")
    if not c.fetchone():
        c.execute("INSERT INTO global_stats (id, tokens, chunks, runs) VALUES (1, 12500000, 4500, 120)")
    conn.commit()
    conn.close()

init_db()

class StatsUpdate(BaseModel):
    tokens: int
    chunks: int
    runs: int

@app.get("/stats")
def get_stats():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("SELECT tokens, chunks, runs FROM global_stats WHERE id=1")
    data = c.fetchone()
    conn.close()
    if data:
        return {"tokens": data[0], "chunks": data[1], "runs": data[2]}
    return {"tokens": 0, "chunks": 0, "runs": 0}

@app.post("/stats/increment")
def increment_stats(update: StatsUpdate):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("""
        UPDATE global_stats 
        SET tokens = tokens + ?, chunks = chunks + ?, runs = runs + ? 
        WHERE id = 1
    """, (update.tokens, update.chunks, update.runs))
    conn.commit()
    
    # Return new stats
    c.execute("SELECT tokens, chunks, runs FROM global_stats WHERE id=1")
    data = c.fetchone()
    conn.close()
    
    return {"tokens": data[0], "chunks": data[1], "runs": data[2]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
