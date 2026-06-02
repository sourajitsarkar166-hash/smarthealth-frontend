import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios.post("https://health-backend-ltzq.onrender.com/api/auth/login", {
        email,
        password
      });

      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data._id);

      alert("Login successful");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br />

      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;