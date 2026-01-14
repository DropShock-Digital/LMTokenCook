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

> **Security Note**: This setup runs a purely client-side application. The application only accesses files you explicitly pick via the Browser File System Access API. No data is stored or transmitted outside your computer.

---

## ☁️ Optional: Cloudflare Tunnel (External Demo)
To share the containerized app with a client.

1.  Make sure Docker is running.
2.  Uncomment the `tunnel` service block in `docker-compose.yml`.
3.  Re-run `docker-compose up --build`.

This runs a specific `cloudflared` container that bridges *only* the Frontend to the web. Your host remains safe.

