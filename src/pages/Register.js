import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      await axios.post("https://health-backend-ltzq.onrender.com/api/auth/register", {
        name,
        email,
        password
      });

      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br /><br />

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br />

      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;