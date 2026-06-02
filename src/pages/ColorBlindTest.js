import React, { useState } from "react";

const plates = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ishihara_9.png",
    answer: "9",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ishihara_3.png",
    answer: "3",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Ishihara_74.png",
    answer: "74",
  },
];

export default function ColorBlindTest() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [input, setInput] = useState("");

  const current = plates[index];

  const handleNext = () => {
    if (input === current.answer) {
      setScore(score + 1);
    }

    setInput("");

    if (index + 1 < plates.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    if (score === plates.length) return "Normal Color Vision 🟢";
    if (score === plates.length - 1) return "Mild Color Weakness 🟡";
    return "Possible Color Vision Deficiency 🔴";
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Color Blindness Test (Ishihara Plates)</h2>

      {!finished ? (
        <>
          <img
            src={current.image}
            alt="Ishihara Plate"
            style={{ width: "250px", margin: "20px 0", borderRadius: "10px" }}
          />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter number you see"
            style={{
              padding: "10px",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          />

          <br />

          <button
            onClick={handleNext}
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Next
          </button>

          <p>
            Plate {index + 1} of {plates.length}
          </p>
        </>
      ) : (
        <div>
          <h3>Test Completed</h3>
          <h2>{getResult()}</h2>
          <p>Your score: {score}/{plates.length}</p>
        </div>
      )}
    </div>
  );
}