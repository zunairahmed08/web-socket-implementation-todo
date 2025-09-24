import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <p>This is the home page of our To-Do app.</p>
      <Link to="/todos">Go to To-Do List</Link> {/* ✅ Matches route exactly */}
    </div>
  );
}

export default HomePage;
