import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081");

    ws.onopen = () => console.log("Connected to server");
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.todos && Array.isArray(message.todos)) {
          setTodos(message.todos);
        }
      } catch (err) {
        console.error("Error parsing WS message:", err);
      }
    };

    ws.onclose = () => console.log("Disconnected from server");
    setSocket(ws);

    return () => ws.close();
  }, []);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];
    setTodos(newTodos);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ todos: newTodos }));
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ todos: newTodos }));
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Link to="/live">📡 See Live Updates</Link>
    </div>
  );
}

export default TodoPage;
