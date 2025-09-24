import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/Homepage";
import TodoPage from "./components/todo/TodoPage";
import LiveTodos from "./components/todo/LiveTodos"; // ✅ new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/live" element={<LiveTodos />} /> {/* ✅ Live view */}
      </Routes>
    </Router>
  );
}

export default App;
