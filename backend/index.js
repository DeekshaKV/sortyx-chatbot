const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const predefinedResponses = {
  "hi": "Hello! Welcome to Sortyx. How can I assist you today?",
  "menu": "We offer electronics, clothing, home appliances, gadgets, and more.",
  "new arrivals": "Our latest arrivals include smartwatches, fashion wear, and kitchen accessories!",
  "payment status": "Please enter your order ID to get payment status.",
  "delivery status": "Please share your order ID to check delivery status.",
  "track order": "Sure! Share your order ID to proceed.",
  "return policy": "You can return items within 7 days of delivery with original packaging.",
  "offers": "We have ongoing discounts up to 40% on electronics!",
  "contact": "You can reach us at support@sortyx.com or call +91-9876543210."
};

app.post("/chat", (req, res) => {
  const message = req.body.message.toLowerCase();
  const response = predefinedResponses[message] || "I'm sorry, I didn't understand that. Please choose from our menu options.";
  res.json({ reply: response });
});

app.get("/", (req, res) => {
  res.send("Sortyx ChatBot API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
