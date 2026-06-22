# Astonish — MERN Starter

This workspace contains a minimal, professional MERN (MongoDB, Express, React, Node) starter with a polished frontend and a simple posts API.

Quick start

1. Install dependencies for server and client:

```powershell
cd server
npm install
cd ../client
npm install
```

2. Start MongoDB (locally) and create `.env` in `server` from `.env.example`.

3. Run server and client in separate terminals:

```powershell
# terminal 1
cd server
npm run dev

# terminal 2
cd client
npm run dev
```

The React app runs on `http://localhost:5173` by default and proxies API requests to the server at `http://localhost:5000`.
