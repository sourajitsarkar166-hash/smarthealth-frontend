import { useState } from "react";
import axios from "axios";

function BodyFat() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const res = await axios.post(
        "https://health-backend-ltzq.onrender.com/api/bodyfat/calculate",
        {
          age: Number(age),
          gender,
          bmi: Number(bmi)
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Body Fat Calculator</h1>

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <br /><br />

      <input
        placeholder="BMI value"
        value={bmi}
        onChange={(e) => setBmi(e.target.value)}
      />

      <br /><br />

      <button onClick={calculate}>Calculate Body Fat</button>

      {result ? (
        <div style={{ marginTop: "20px" }}>
          <h3>Body Fat: {result.bodyFat ?? "N/A"}%</h3>
          <p>Category: {result.category ?? "N/A"}</p>
        </div>
      ) : (
        <p>Please enter required details</p>
      )}
    </div>
  );
}

export default BodyFat;