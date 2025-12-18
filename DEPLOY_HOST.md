# 🌍 24/7 Host Deployment Guide

This guide explains how to turn your secondary laptop into a **permanent 24/7 server** for `LMTokenCook` (and other DropShock apps).

## 📋 Prerequisites

1.  **Docker Desktop**: Installed and running on the laptop.
2.  **Git**: Installed.
3.  **Power & Network**: Laptop plugged in and set to **"Never Sleep"**.

## 🚀 Setup Steps

### 1. Clone the Codebase
On the second laptop, open a terminal (PowerShell or CMD) and run:

```powershell
mkdir C:\Hosting
cd C:\Hosting
git clone https://github.com/DropShock-Digital/LMTokenCook.git
cd LMTokenCook
```

### 2. Configure "Always On"
Ensure the laptop doesn't go to sleep.
*   **Windows**: Settings > System > Power & sleep > Screen and Sleep > **"Never"**.
*   **Lid**: Control Panel > Hardware and Sound > Power Options > "Choose what closing the lid does" > **"Do nothing"**.

### 3. Launch the Stack
Run the application in "Detached" mode (background).

```powershell
docker-compose up -d --build
```

### 4. Get Your Permanent URL
The Cloudflare Tunnel will automatically generate a URL. To find it:

```powershell
docker logs lmtokencook-tunnel
```

Look for the line:
`https://[random-words].trycloudflare.com`

> **Note**: This URL will stay active as long as the Docker container is running. If you restart the container, you *may* get a new URL. For a truly permanent domain (e.g., `cook.dropshock.com`), you would need to authenticate the `cloudflared` container with a token (configured in `docker-compose.yml`).

## 🔄 Maintenance

*   **Update App**:
    ```powershell
    git pull
    docker-compose up -d --build
    ```
*   **Restart**:
    ```powershell
    docker-compose restart
    ```
*   **Stop**:
    ```powershell
    docker-compose down
    ```
