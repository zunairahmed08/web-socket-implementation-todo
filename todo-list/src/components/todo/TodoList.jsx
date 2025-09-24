function TodoList({ todos, deleteTodo }) {
  if (!Array.isArray(todos)) {
    console.warn("Warning: todos prop is not an array:", todos);
    return <p>No todos available.</p>;
  }

  // Reverse a copy of todos array to avoid mutating props
  const reversedTodos = [...todos].reverse();

  return (
    <ul className="todo-list">
      {reversedTodos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
