import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import BMI from "./pages/BMI";
import BodyFat from "./pages/BodyFat";
import Calories from "./pages/Calories";
import History from "./pages/History";
import "./styles/global.css";
import ColorBlindTest from "./pages/ColorBlindTest";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
  
  {/* Sidebar with fixed width */}
  <div className="w-64 fixed h-screen">
    <Sidebar />
  </div>

  {/* Main content pushed right */}
  <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/bodyfat" element={<BodyFat />} />
      <Route path="/calories" element={<Calories />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </div>

</div>
    </BrowserRouter>
  );
}