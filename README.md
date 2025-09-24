"Full Stack Todo App"
A simple full-stack Todo application with a **React frontend** and a **Node.js WebSocket backend**, providing real-time task synchronization across multiple clients.

# Quick Start (2 Terminals)

# Backend

```bash
cd webSocket
npm install
node server.js
# WebSocket Server → ws://localhost:3001
```

# Frontend

```bash
cd todo-list
npm install
npm run dev
# Frontend → http://localhost:5173
```

---

# Features

**Frontend**

* Add, edit, and delete tasks
* Responsive design
* Task history page
* Real-time updates

**Backend**

* Real-time WebSocket server
* Multi-client synchronization
* In-memory storage
* Event broadcasting

---

# Project Structure

*Frontend (todo-list/)**

```
src/components/
 ├── TodoItem.jsx
 ├── TodoForm.jsx
 ├── TodoList.jsx
 └── UI/
App.jsx
LogPage.jsx
main.jsx
package.json
```

*Backend (webSocket/)**

```
server.js
package.json
node_modules/
```

---

# Real-time Communication

**Client → Server**

* addTask
* updateTask
* deleteTask
* getTasks

**Server → Client**

* tasksUpdate
* taskAdded
* taskUpdated
* taskDeleted

---

## Tech Stack

* Frontend: React, Vite, CSS
* Backend: Node.js, ws (WebSocket library)

---

