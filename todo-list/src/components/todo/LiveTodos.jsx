import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LiveTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081");

    ws.onopen = () => console.log("Connected to WS server");
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

    ws.onclose = () => console.log("Disconnected from WS server");
    return () => ws.close();
  }, []);

  return (
    <div className="container">
      <h1>Live Todo Updates</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <Link to="/todos">Back to Todo Page</Link>
    </div>
  );
}

export default LiveTodos;
