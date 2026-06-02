import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [bmi, setBmi] = useState(null);
  const [bodyFat, setBodyFat] = useState(null);
  const [calories, setCalories] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const bmiRes = await axios.get("/api/bmi");
      const fatRes = await axios.get("/api/bodyfat");
      const calRes = await axios.get("/api/calories");
      const historyRes = await axios.get("/api/results");
      axios.get("https://health-backend-ltzq.onrender.com/api/bmi")

      setBmi(bmiRes.data);
      setBodyFat(fatRes.data);
      setCalories(calRes.data);
      setHistory(historyRes.data || []);
    } catch (err) {
      console.error("Dashboard load error:", err);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="title">Smart Health Dashboard</h1>

      <div className="grid">
        <div className="card">
          <h3>BMI</h3>
          <p>{bmi?.value ?? "N/A"}</p>
        </div>

        <div className="card">
          <h3>Body Fat</h3>
          <p>{bodyFat?.value ?? "N/A"}%</p>
        </div>

        <div className="card">
          <h3>Calories</h3>
          <p>{calories?.value ?? "N/A"} kcal</p>
        </div>
      </div>

      <div className="history">
        <h2>Recent History</h2>

        {history.length === 0 ? (
          <p>No history found</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.type} → {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;