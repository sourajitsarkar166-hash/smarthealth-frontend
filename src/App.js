import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import BMI from "./pages/BMI";
import BodyFat from "./pages/BodyFat";
import Calories from "./pages/Calories";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/bodyfat" element={<BodyFat />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<History />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;