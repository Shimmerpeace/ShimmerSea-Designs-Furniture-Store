// src/routes/homeRoutes.js
const express = require("express");
const {
  getHomeData,
  getProducts,
  getFeatured,
  getDeals,
  getStats,
} = require("../controllers/homeController");

const router = express.Router();

// Single payload for the whole homepage (easy for SSR / initial load)
router.get("/", getHomeData);

// Optional granular endpoints if you want to fetch per section:
router.get("/products", getProducts);
router.get("/featured", getFeatured);
router.get("/deals", getDeals);
router.get("/stats", getStats);

module.exports = router;
