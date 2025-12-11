# LMTokenCook (Docker Edition)

<div align="center">
  <img src="assets/demo.webp" alt="LMTokenCook Demo" width="100%" style="border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 0 50px rgba(245, 158, 11, 0.2);">
</div>

<br>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue.svg?logo=docker)](https://www.docker.com/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB.svg?logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688.svg?logo=fastapi)](https://fastapi.tiangolo.com/)

**The "Context Augmented Generation" (CAG) Parsing Engine.**  
*Prepare your entire repository for Gemini 1.5 Pro, Claude 3.5 Sonnet, and GPT-4o.*

</div>

---

## 🚀 The AI Power-User's Secret Weapon
LMTokenCook is a **local data processing engine** that turns your messy codebase into a pristine, token-optimized "Context Object" for Large Language Models. 

Unlike "RAG" (Retrieval Augmented Generation), which aggressively filters your data to save costs, **CAG** (Context Augmented Generation) feeds the **entire related codebase** into the model's short-term memory. This unlocks:
- **Global Reasoning**: The AI sees the *whole* picture, not just search results.
- **Deep Refactoring**: Safely change core architectures with full dependency awareness.
- **Consistency**: Maintain style and tone across hundreds of files simultaneously.

## ✨ Features (Docker Edition)
We have retired the desktop app in favor of a **robust, containerized web application**. This ensures 100% isolation, reproducibility, and OS-agnostic performance.

- **🛡️ 100% Local Processing**: Your code never leaves your Docker container until you copy the output.
- **🐳 Zero-Config Deployment**: Usage is as simple as `docker-compose up`.
- **✂️ Intelligent "Servings"**: Automatically splits massive repos into Prompt-Window-Sized chunks (e.g., 28k for ChatGPT Teams, 128k for GPT-4).
- **🧠 Smart Headers**: Injects anti-hallucination prompts ("Part 1 of 5... Do not answer yet") to force the AI to wait for the full context.
- **🗺️ Recursive File Map**: Generates a tree-structure TOC of your entire project for high-level AI planning.
- **⚡ TikToken Accuracy**: Uses the exact tokenizer mappings used by OpenAI and Google for bit-perfect window management.

## 🛠️ Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac/Linux)

### Installation
1.  **Clone the Repository**
    ```bash
    git clone https://github.com/DropShock-Digital/LMTokenCook.git
    cd LMTokenCook
    ```

2.  **Launch the Engine**
    ```bash
    docker-compose up --build
    ```

3.  **Start Cooking**
    Open your browser to: `http://localhost:5173`

    *(Optional)* The logs will verify the backend is active at `http://localhost:8000`.

## 📦 Architecture
LMTokenCook uses a modern "Dual-Head" architecture orchestrated by Docker Compose:

| Service | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React + Vite | A beautiful, "Liquid Glass" UI for selecting files and configuring options. |
| **Backend** | Python + FastAPI | The heavy-lifting engine. Handles file system recursion, token counting, and chunk serialization. |
| **Sidecar** | Cloudflared | *(Optional)* Secure, encrypted tunnel for safely exposing your local instance to the web. |

## 📖 Configuration Guide
Once the app is running, you can toggle these advanced features:

- **Smart Context Headers**: Adds "Part X of Y" headers. *Recommended: ON*
- **Generate File Map**: Creates `000_structure_map.txt`. *Recommended: ON*
- **Add Line Numbers**: Prepends `0042:` to lines for surgical LLM refactors. *Recommended: ON for Code*
- **Skip Empty Lines**: Removes whitespace to save ~15% token usage. *Recommended: ON*
- **Deliver Master File**: Creates one massive file in addition to chunks. *Useful for Gemini 1.5 Pro (2M Context).*

## 🔒 Privacy & Security
- **No Telemetry**: We do not track your code or your queries.
- **Local-First**: All "Uploads" are actually just File System Access API calls locally.
- **Docker Isolation**: The application runs in a sandboxed network.

---

<div align="center">
  <p>© 2025 DropShock Digital. Created by Steven Seagondollar.</p>
  <p><em>"Results over Process."</em></p>
</div>
