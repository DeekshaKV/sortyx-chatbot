import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await axios.post("https://sortyx-backend.onrender.com/chat", { message: input });
      const botMsg = { text: res.data.reply, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      setMessages(prev => [...prev, { text: "Error connecting to server.", sender: "bot" }]);
    }
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Sortyx ChatBot 🤖</h1>
        <div className="h-96 overflow-y-auto space-y-2 mb-4 bg-gray-900 p-3 rounded-xl">
          {messages.map((msg, idx) => (
            <div key={idx} className={\`text-sm p-2 rounded-xl \${msg.sender === "user" ? "bg-blue-600 text-right ml-auto w-fit" : "bg-gray-700 text-left mr-auto w-fit"}\`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-grow p-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
          />
          <button
            onClick={handleSend}
            className="bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
