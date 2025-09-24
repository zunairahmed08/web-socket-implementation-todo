import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080"); // tumhare backend ka address
    setSocket(newSocket);

    newSocket.onopen = () => {
      console.log("Connected to server");
    };

    newSocket.onmessage = (event) => {
      console.log("Message from server:", event.data);
    };

    newSocket.onclose = () => {
      console.log("Disconnected from server");
    };

    // Cleanup jab component unmount hoga
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Test</h1>
      <button
        onClick={() => {
          if (socket) {
            socket.send("Hello from frontend");
          }
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default App;
