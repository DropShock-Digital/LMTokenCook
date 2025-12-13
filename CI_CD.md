# Continuous Integration & Deployment (CI/CD)

Required Passing State: [![LMTokenCook CI](https://github.com/DropShock-Digital/LMTokenCook/actions/workflows/ci.yml/badge.svg)](https://github.com/DropShock-Digital/LMTokenCook/actions/workflows/ci.yml)

## Pipeline Overview

We use **GitHub Actions** to enforce code quality, strict typing, and passing tests on every push to `main` or Pull Request. This ensures that the code present in the repository is always build-ready ("Green State").

### Workflows

#### 1. `ci.yml` (The Gatekeeper)
This workflow detects changes and runs two parallel jobs:

| Job | Responsibility | Commands |
| :--- | :--- | :--- |
| **Backend Test** | Verifies Python API integrity. | `pip install`, `flake8` (Lint), `pytest` (Unit Tests) |
| **Frontend Build** | Verifies React UI integrity. | `npm ci`, `npm run build` (TSC + Vite) |

## Troubleshooting Common Failures

### 🔴 Backend: `pytest` or `flake8` failed
- **Lint Errors (Flake8)**: The pipeline enforces PEP8 standards.
    - *Fix*: Run `flake8 .` locally and correct syntax errors or unused imports.
- **Import Errors**: Usually caused by missing `requirements.txt` packages.
    - *Fix*: Ensure any new library is added to `src/server/requirements.txt`.
- **Database Locks**: The test suite initializes the SQLite DB.
    - *Fix*: We use a `lifespan` context manager in `main.py` to prevent side effects during import.

### 🔴 Frontend: `npm run build` failed
- **TypeScript Errors (`noImplicitAny`)**: We use **Strict Mode**.
    - *Fix*: You must assign explicit types to all variables. Do not use implicit `any`.
    - *Example*: Change `catch(e) { ... }` to `catch(e: unknown) { ... }`.
- **Dependency Issues**:
    - *Fix*: If `npm ci` fails, your `package-lock.json` might be out of sync. delete it and run `npm install` locally, then push the new lockfile.

## Local Verification
Before pushing, run these commands to simulate the CI environment:

```bash
# Backend
cd src/server
pip install -r requirements.txt
flake8 . --exit-zero
pytest tests/

# Frontend
cd src/ui
npm ci
npm run build
```
