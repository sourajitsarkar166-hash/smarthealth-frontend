import { useState } from "react";
import axios from "axios";

function Calories() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const res = await axios.post(
        "https://health-backend-ltzq.onrender.com/api/calories/calculate",
        {
          age: Number(age),
          weight: Number(weight),
          height: Number(height),
          activity
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calories & Protein Calculator</h1>

      <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <br /><br />

      <input placeholder="Weight (kg)" onChange={(e) => setWeight(e.target.value)} />
      <br /><br />

      <input placeholder="Height (cm)" onChange={(e) => setHeight(e.target.value)} />
      <br /><br />

      <select onChange={(e) => setActivity(e.target.value)}>
        <option value="low">Low Activity</option>
        <option value="moderate">Moderate</option>
        <option value="high">High Activity</option>
      </select>

      <br /><br />

      <button onClick={calculate}>Calculate</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Calories: {result.dailyCalories}</h3>
          <h3>Protein: {result.protein}g</h3>
          <p>{result.aiComment}</p>
        </div>
      )}
    </div>
  );
}

export default Calories;