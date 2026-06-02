import { useState } from "react";
import axios from "axios";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = async () => {
  try {
    const res = await axios.post(
      "https://health-backend-ltzq.onrender.com/api/bmi/calculate",
      {
        height: Number(height),
        weight: Number(weight),
      }
    );

    // SAFE CHECK
    if (res.data) {
      setResult(res.data);
    } else {
      setResult(null);
    }

    // SAVE TO DATABASE
    await axios.post(
      "https://health-backend-ltzq.onrender.com/api/results/save",
      {
        userId: localStorage.getItem("userId"),
        testType: "BMI",
        result: res.data,
      }
    );
  } catch (err) {
    console.log("BMI API ERROR:", err);

    setResult({
      bmi: "Error",
      category: "Server issue or network error",
    });
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>BMI Calculator</h1>

      <input
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateBMI}>Calculate</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>BMI: {result.bmi}</h3>
          <p>Category: {result.category}</p>
        </div>
      )}
    </div>
  );
}

export default BMI;