import { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const getAIResponse = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("bmi")) {
      return "BMI (Body Mass Index) helps determine if your weight is healthy relative to your height. Normal range is 18.5–24.9.";
    }

    if (msg.includes("fat")) {
      return "Body fat percentage indicates how much fat your body contains. Healthy range varies by gender and age.";
    }

    if (msg.includes("calorie")) {
      return "Calorie needs depend on age, weight, height, and activity level. Higher activity = higher calorie requirement.";
    }

    if (msg.includes("protein")) {
      return "Protein intake supports muscle growth and repair. Average requirement is 0.8g per kg body weight.";
    }

    return "I am your Smart Health Assistant. Ask me about BMI, body fat, calories, or nutrition.";
  };

  const sendMessage = () => {
    if (!input) return;

    const reply = getAIResponse(input);

    setMessages([
      ...messages,
      { user: input, bot: reply }
    ]);

    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧠 Smart Health AI Assistant</h1>

      <div style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px"
      }}>
        {messages.map((m, i) => (
          <div key={i}>
            <p><b>You:</b> {m.user}</p>
            <p><b>AI:</b> {m.bot}</p>
            <hr />
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask health question..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;