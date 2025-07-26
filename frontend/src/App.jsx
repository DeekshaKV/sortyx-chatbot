import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post("https://your-backend-url.onrender.com/chat", { message: input });
      const botMsg = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error reaching server" }]);
    }
    setInput("");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Sortyx ChatBot</h1>
      <div style={{ border: "1px solid gray", padding: "1rem", marginBottom: "1rem", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type your message..."
        style={{ width: "80%", padding: "0.5rem" }}
      />
      <button onClick={sendMessage} style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>Send</button>
    </div>
  );
};

export default App;
