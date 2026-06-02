import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await axios.get(
        `https://health-backend-ltzq.onrender.com/api/history/${localStorage.getItem("userId")}`
      );
      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px", background: "#f5f7fb" }}>
      <h1>🏥 Health Dashboard</h1>

      {results.map((item) => (
        <div key={item._id} style={{
          background: "white",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <h2>{item.testType}</h2>

          <pre style={{ fontSize: "14px" }}>
            {JSON.stringify(item.result, null, 2)}
          </pre>

          <small>
            {new Date(item.createdAt).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;