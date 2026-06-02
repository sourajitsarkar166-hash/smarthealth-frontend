import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "15px",
      padding: "15px",
      background: "#1e1e1e",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/bmi" style={{ color: "white" }}>BMI</Link>
      <Link to="/bodyfat" style={{ color: "white" }}>Body Fat</Link>
      <Link to="/calories" style={{ color: "white" }}>Calories</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
      <Link to="/history">History</Link>
      <Link to="/chatbot">AI Chat</Link>
    </div>
  );
}

export default Navbar;