# Realtime Canvas

A collaborative real-time drawing canvas built with Express, Socket.IO, TypeScript on the backend, and React + Konva on the frontend. This application allows multiple users to draw rectangles on a shared canvas with real-time updates.

## Features

- Real-time rectangle drawing and movement
- WebSocket communication using Socket.IO
- Modular, clean, and scalable backend & frontend architecture
- TypeScript support for both backend and frontend
- Responsive UI with sleek design

---

## Folder Structure

```
realtime-canvas/
├── client/           # Frontend (React + Zustand + Tailwind + Konva)
└── server/           # Backend (Express + Socket.IO + TypeScript)
```

---

## Backend Setup (Express + Socket.IO)

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
cd server
npm install
```

### Run in Dev Mode

```bash
npm run dev
```

### .env Variables (Optional)

You can create a `.env` file in `server/` and add:

```
PORT=4000
CORS_ORIGIN=http://localhost:3000
```

---

## Frontend Setup (Next.js)

### Prerequisites

- Node.js >= 18.x

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

### Configuration

Create a `.env` file inside at root level in `client/` and paste this in it

```ts
VITE_SOCKET_SERVER_URL=http://localhost:4000
```

---

## Deployment Notes

### Vercel

- Frontend is depoyed on Vercel (`client/`)
- Link [https://realtime-canvas-beta.vercel.app/](https://realtime-canvas-beta.vercel.app/)

### Render (Backend)

- Backend is depoyed on Vercel (`server/`)
- Link [https://realtime-canvas-backend-vxfm.onrender.com](https://realtime-canvas-backend-vxfm.onrender.com)

---

## IMPORTANT

- Backend is deployed on render.com free tier and it sleeps after 15 minutes of inactivity
- When client makes a request, it takes server up to 50 seconds to wake up and then it works normally.

---

## License

This project is open-source and available under the MIT License.