## 🚀 Live Demo URL
**[https://math-total-either-switched.trycloudflare.com](https://math-total-either-switched.trycloudflare.com)**

> **Status**: Active (Dockerized Tunnel)
This is the secure, reproducible way to run **LMTokenCook**. It isolates the application from your host operating system.

### 1. Prerequisites
*   Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows.

### 2. Start the App
Open a terminal in the project root and run:
```powershell
docker-compose up --build
```

### 3. Usage
*   **Web App**: Open [http://localhost:5173](http://localhost:5173) in your browser.
*   **API**: Running internally on [http://localhost:8000](http://localhost:8000).

> **Security Note**: This setup creates a virtual network. The app cannot access your `C:` drive or other files unless they are in the `src` folder we explicitly mounted.

---

## ☁️ Optional: Cloudflare Tunnel (External Demo)
To share the containerized app with a client.

1.  Make sure Docker is running.
2.  Uncomment the `tunnel` service block in `docker-compose.yml`.
3.  Re-run `docker-compose up --build`.

This runs a specific `cloudflared` container that bridges *only* the Frontend to the web. Your host remains safe.

