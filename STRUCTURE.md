# 🏗️ LMTokenCook: Repository Architecture & Justification

> **Objective**: This document provides a comprehensive audit of the `LMTokenCook` codebase, justifying the architectural decisions, folder structure, and file organization. It demonstrates adherence to the "Dual-Head Monolith" pattern, prioritizing separation of concerns, scalability, and local-first security.

---

## 1. 🏛️ Architectural Philosophy: The "Dual-Head Monolith"

This repository follows a **Dual-Head Monolith** design pattern. This means both the **Frontend** (React/Vite) and **Backend** (FastAPI/Python) reside in a single repository but maintain strict modular separation.

*   **Why?**:
    *   **Atomic Deployments**: A single `docker-compose` command spins up the entire stack, ensuring the frontend and backend versions always match.
    *   **Shared Context**: Easier for a single developer or small team to maintain deeply integrated features (e.g., matching token counting logic across stack).
    *   **Scalability**: The `src/ui` and `src/server` folders can be split into separate repositories instantly if the team grows, as they touch only via standard HTTP APIs.

---

## 2. 📂 Directory Structure Audit

### 🔹 Root Directory
The root serves as the **Orchestration Layer**. It contains configuration for the environment, deployment, and documentation.

| File / Folder | Purpose & Justification |
| :--- | :--- |
| `docker-compose.yml` | **Orchestrator**. Defines the multi-container environment (UI, API, Nginx, Tunnel). It is the single source of truth for runtime topology. |
| `Dockerfile` | **Production Build**. Defines how the UI and Server are containerized. critical for reproducible deployments. |
| `nginx.conf` | **Gateway**. Acts as a reverse proxy, handling CORS, routing (`/api` -> Backend, `/` -> Frontend), and security headers. Essential for mimicking production traffic locally. |
| `README.md` | **Entry Point**. High-quality documentation explaining *What* and *How*. Includes architectural diagrams (Mermaid). |
| `SECURITY.md` | **Policy**. Defines the security stance (Local-First, No Data Exfiltration), critical for user trust in AI tools. |
| `.github/` | **CI/CD**. Contains GitHub Actions (`ci.yml`) to enforce code quality (Linting, Testing) on every push. |
| `assets/` | **Immutable Reference**. Stores binary assets (logos, screenshots) used in documentation. Kept separate from `public` to avoid bloating the production web build. |

### 🔹 `src/server` (The "Iron Head")
The Python backend, powered by FastAPI.

| File / Folder | Purpose & Justification |
| :--- | :--- |
| `main.py` | **Application Entry**. Initializes FastAPI, mounts middleware (CORS), and checks database connection. Kept minimal to force logic into `core/`. |
| `core/chunker.py` | **Business Logic**. Contains the isolated, testable logic for text segmentation and token counting. Separation allows this module to be tested without spinning up the server. |
| `requirements.txt` | **Dependencies**. Pinned versioning for reproducible Python environments. |
| `stats.db` (Ignored) | **Persistence**. SQLite is chosen for zero-config persistence. Ignored by git to prevent data leaks. |

### 🔹 `src/ui` (The "Glass Head")
The React frontend, powered by Vite.

| File / Folder | Purpose & Justification |
| :--- | :--- |
| `vite.config.ts` | **Build Config**. Configures the dev server, proxies (`/stats`), and build output. Essential for the modern frontend toolchain. |
| `src/lib/` | **Utilities**. Contains `fs-handler.ts` (File System Access API) and `chunker.ts` (Client-side logic). Separation ensures UI components stay focused on *rendering*, not *computing*. |
| `src/components/` | **UI Library**. Contains reusable components (`LandingPage.tsx`). Encourages atomic design. |
| `public/` | **Static Serving**. Files here (`llms.txt`, `favicon.ico`) are served directly at the root. Essential for SEO and browser integration. |

---

## 3. 🔍 Recent Improvements & Cleanup

To ensure the repository meets the highest standards of "Employability" and presentation, the following actions were taken:

*   ✅ **Junk Removal**: Deleted extraneous artifacts (`delete`, `query`, `stop`) that cluttered the root.
*   ✅ **Asset Consolidation**: Centralized `assets/` as the Source of Truth for visuals, ensuring the repo doesn't contain duplicate "ghost" images.
*   ✅ **Documentation Graphics**: Added **Mermaid.js** diagrams to `README.md` to visualize the architecture, showing prospective employers you think in systems, not just code.
*   ✅ **Security Hardening**: Enforced `SECURITY_CHECKLIST.md` (non-root users, security headers) to demonstrate enterprise-readiness.

## 4. 🚀 Conclusion

This repository is structured not just to "work," but to **scale** and **communicate**.
*   **For Reviewers**: The structure demonstrates a mastery of modern DevOps (Docker/CI), full-stack separation (React/FastAPI), and "Local-First" architectural constraint handling.
*   **For Users**: The "Dual-Head" design ensures a robust, reliable application that respects their privacy and data.

**Status**: 🟢 **Production Ready & Highly Presentable**
