# LMTokenCook (Client-Side v2)

**Zero-Trust, Browser-Native Context Preparation Engine**

LMTokenCook runs entirely in your browser using WebAssembly. It recursively scans local directories, tokenizes text, and packages it into "servings" optimized for LLM context windows (GPT-4, Claude 3, Gemini 1.5).

![LMTokenCook](public/lmtc_emblem.png)

## Features
*   **Privacy First**: Files never leave your device. Uses File System Access API.
*   **Smart Context Awareness**: Injects "Chunk X of Y" prompts to prevent LLM hallucinations.
*   **Codebase Mapping**: Generates a recursive file map/table of contents for the AI.
*   **Precision Tools**: Line numbering (`0001: code`), whitespace cleaner, and token-aware splitting.
*   **Universal Fallback**: Works on all browsers (Direct Access on Chrome/Edge, Zip Download on Firefox/Safari).

## Usage
1.  **Select Input**: Choose a folder to scan recursively.
2.  **Configure**: Adjust chunk size (e.g., 32k or 128k) and toggle Power User settings.
3.  **Cook**: LMTokenCook will read, count, chunk, and write the "servings" back to your disk (or Zip).

## Development
```bash
cd src/ui
npm install
npm run dev
# Run Tests
npm run test
```

## Credits
Created by **Steven Seagondollar** | **DropShock Digital**
