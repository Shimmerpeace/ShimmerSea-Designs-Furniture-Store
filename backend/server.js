// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Import routes
const homeRoutes = require("./src/routes/homeRoutes");
app.use("/api/home", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/**
 *const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/furniture-shop")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error", err));

 */