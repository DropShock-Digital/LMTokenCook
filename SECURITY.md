# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Docker  | :white_check_mark: |
| Legacy  | :x:                |

## Reporting a Vulnerability

Please report sensitive security issues via email to **security@dropshockdigital.com**.
For standard bugs, please use the [GitHub Issue Tracker](https://github.com/DropShock-Digital/LMTokenCook/issues).

## Security Model

LMTokenCook is designed with a "Local-First" security model.

### 1. Data Isolation
- **100% Local**: All code processing happens inside the Docker container on your machine.
- **No Telemetry**: We do not transmit your code stats or contents to any external server.
- **Ephemeral Storage**: Uploaded files/folders are processed in memory or temporary volumes and are not persisted after the container stops (unless mapped to a host volume).

### 2. Network Security
- **Internal Network**: The Frontend and Backend communicate over an internal Docker Bridge network (`lmtokencook-net`) that is not exposed to the host network interface directly.
- **Tunneling**: If you use the Cloudflare Tunnel, it establishes an outbound-only encrypted connection. No inbound ports need to be opened on your router/firewall.
- **Headers**: The Nginx proxy is configured with standard security headers (`X-Frame-Options`, `Content-Security-Policy`, etc.) to prevent common web attacks.

### 3. Input Sanitization
- **Backend**: All generic database interactions use parameterized queries to prevent SQL Injection.
- **Frontend**: File inputs are handled via the browser's File System Access API and are restricted to read-only access where possible.
