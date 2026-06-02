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
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/bodyfat" element={<BodyFat />} />
            <Route path="/calories" element={<Calories />} />
            <Route path="/history" element={<History />} />
            <Route path="/color-test" element={<ColorBlindTest />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}