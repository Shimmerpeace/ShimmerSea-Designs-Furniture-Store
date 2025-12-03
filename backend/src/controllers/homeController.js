// src/controllers/homeController.js
const {
  products,
  featuredProducts,
  productionCategories,
  stats,
  deals,
  testimonial,
  news,
} = require("../data/homeData");

// GET /api/home
const getHomeData = (req, res) => {
  res.json({
    hero: {
      title: "Furniture Solutions. Affordable Prices.",
      subtitle:
        "Discover modern furniture that blends comfort, craftsmanship, and modern design.",
    },
    productionCategories,
    products,
    featuredProducts,
    stats,
    deals,
    testimonial,
    news,
  });
};

// Optional: separate endpoints if you want fine‑grained fetching

// GET /api/home/products
const getProducts = (req, res) => {
  res.json(products);
};

// GET /api/home/featured
const getFeatured = (req, res) => {
  res.json(featuredProducts);
};

// GET /api/home/deals
const getDeals = (req, res) => {
  res.json(deals);
};

// GET /api/home/stats
const getStats = (req, res) => {
  res.json(stats);
};

module.exports = {
  getHomeData,
  getProducts,
  getFeatured,
  getDeals,
  getStats,
};
