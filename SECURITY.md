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
- **Pure Client-Side**: All processing happens in your browser. There is no backend service to attack.
- **Tunneling**: If you use the Cloudflare Tunnel, it serves the static frontend assets. No inbound ports need to be opened on your router/firewall.

### 3. Input Sanitization
- **Frontend**: File inputs are handled via the browser's File System Access API. The application only reads text content and does not execute scripts from uploaded files.
