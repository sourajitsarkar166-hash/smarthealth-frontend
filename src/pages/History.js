import { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await axios.get(
        `https://health-backend-ltzq.onrender.com/api/results/${localStorage.getItem("userId")}`
      );

      const safeData = Array.isArray(res.data) ? res.data : [];
      setData(safeData);

    } catch (err) {
      console.log("History error:", err);
      setData([]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Health History</h1>

      {data.length === 0 ? (
        <p>No history found</p>
      ) : (
        data.map((item) => (
          <div key={item._id} style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px"
          }}>
            <h3>{item.testType}</h3>
            <pre>{JSON.stringify(item.result, null, 2)}</pre>
            <small>{new Date(item.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default History;