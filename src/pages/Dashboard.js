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
    const baseURL = "https://health-backend-ltzq.onrender.com";

    const bmiRes = await axios.get(`${baseURL}/api/bmi`);
    const fatRes = await axios.get(`${baseURL}/api/bodyfat`);
    const calRes = await axios.get(`${baseURL}/api/calories`);
    const historyRes = await axios.get(`${baseURL}/api/results`);

    setBmi(bmiRes.data || null);
    setBodyFat(fatRes.data || null);
    setCalories(calRes.data || null);

    setHistory(Array.isArray(historyRes.data) ? historyRes.data : []);

  } catch (err) {
    console.error("Dashboard load error:", err);

    setBmi(null);
    setBodyFat(null);
    setCalories(null);
    setHistory([]);
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