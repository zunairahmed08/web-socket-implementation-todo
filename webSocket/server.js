import { WebSocketServer } from "ws";

let todos = [];
const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send current todos to new client as { todos }
  ws.send(JSON.stringify({ todos }));

  ws.on("message", (message) => {
    const { todos: updatedTodos, log } = JSON.parse(message);

    // Detect new todos (present in updatedTodos but not in todos)
    const newTodos = updatedTodos.filter(
      (newTodo) => !todos.some((oldTodo) => oldTodo.id === newTodo.id)
    );

    // Update global todos
    todos = updatedTodos;

    // Log new todos added
    if (newTodos.length > 0) {
      newTodos.forEach((todo) => {
        console.log("New todo added:", todo.text);
      });
    }

    // Log the entire updated todos array each time
    console.log("Updated todos received from client:", todos);

    // Broadcast updated todos to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify({ todos, log }));
      }
    });
  });

  ws.on("close", () => console.log("Client disconnected"));
});

console.log("✅ WebSocket server running on ws://localhost:8081");
