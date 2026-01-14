# 🏗️ LMTokenCook: Repository Architecture & Justification

> **Objective**: This document provides a comprehensive audit of the `LMTokenCook` codebase, justifying the architectural decisions, folder structure, and file organization. It demonstrates adherence to the "Unified Stack" pattern, prioritizing local-first security and zero-latency browser processing.

---

## 1. 🏛️ Architectural Philosophy: The "Unified Stack"

This repository follows a **Unified Stack** design pattern. The entire application logic—scaning, mapping, and tokenizing—resides entirely within the **Frontend** (React/Vite). There is no backend server.

*   **Why?**:
    *   **Zero-Latency**: Processing happens instantly in the user's browser (WebWorkers/FSA API), removing network round-trips.
    *   **Maximum Privacy**: Since no data ever leaves the machine, it is the most secure architecture for processing sensitive codebases.
    *   **Simplicity**: Deployment is reduced to serving static files. No databases, no API keys, no server maintenance.

---

## 2. 📂 Directory Structure Audit

### 🔹 Root Directory
The root serves as the **Orchestration Layer** for deployment and local development environments.

| File / Folder | Purpose & Justification |
| :--- | :--- |
| `docker-compose.yml` | **Orchestrator**. Defines the environment for serving the frontend and the Cloudflare Tunnel. |
| `Dockerfile` | **Production Build**. Defines how the UI is containerized using a high-performance static server. |
| `README.md` | **Entry Point**. High-quality documentation explaining the "Logic of the Roast" and usage. |
| `SECURITY.md` | **Policy**. Defines the security stance (100% Local, No Data Exfiltration). |
| `.github/` | **CI/CD**. Contains GitHub Actions (`ci.yml`) to enforce code quality (Linting, Vitest) on every push. |
| `assets/` | **Storage**. Central repository for visual assets used in documentation and README. |

### 🔹 `src/ui` (The Core Engine)
The entire application resides here, powered by React and Vite.

| File / Folder | Purpose & Justification |
| :--- | :--- |
| `vite.config.ts` | **Build Config**. Configures the modern frontend toolchain and development server. |
| `src/lib/` | **The Brain**. Contains `chunker.ts` (precisely counting tokens with `cl100k_base`) and `fs-handler.ts`. |
| `src/components/` | **Interface**. Contains modular React components and the immersive `LandingPage.tsx`. |
| `public/` | **Static Serving**. Minimalist metadata and crawler-friendly discovery files (`llms.txt`). |

---

## 3. 🔍 Recent Improvements & Cleanup

To ensure the repository meets the highest standards of presentation and focus:

*   ✅ **Monolith Deconstruction**: Removed the legacy FastAPI backend and Nginx proxy to simplify the architecture.
*   ✅ **Local-First Pivot**: Refactored the core chunking logic to run purely in the browser using the File System Access API.
*   ✅ **Documentation Graphics**: Synchronized all diagrams to reflect the new server-less flow.
*   ✅ **Lint & Test Pass**: Hardened the codebase to ensure zero warnings and passing Vitest suites.

## 4. 🚀 Conclusion

This repository is structured for **Speed**, **Privacy**, and **Clarity**.
*   **For Reviewers**: It demonstrates mastery of modern browser APIs (FSA), efficient client-side data processing, and clean React architecture.
*   **For Users**: It provides a professional, "set-and-forget" utility that respects their data and context window limits.

**Status**: 🟢 **Production Ready & Highly Optimized**
