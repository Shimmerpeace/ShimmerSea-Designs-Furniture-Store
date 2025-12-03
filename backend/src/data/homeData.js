// src/data/homeData.js

// In a real app you would fetch these from a DB.
// For now, use plain JS data that mirrors your frontend sections.

const products = [
  { id: 1, name: "Abesto Comfy Chair", image: "/images/image6.png" },
  { id: 2, name: "Allan Garco Occasional Chair", image: "/images/image7.jpeg" },
  { id: 3, name: "Banozon Table", image: "/images/image8.jpeg" },
  { id: 4, name: "Herimann Sofa", image: "/images/image9.jpeg" },
  { id: 5, name: "Rubens Chair", image: "/images/image10.jpeg" },
  { id: 6, name: "Adwell Full Sleigh Bed", image: "/images/image11.jpeg" },
  { id: 7, name: "Sofa Grey", image: "/images/image12.jpeg" },
  { id: 8, name: "Stool Beige Ottoman", image: "/images/image13.jpeg" },
  { id: 9, name: "Adwell Full Sleigh Bed Grey", image: "/images/image14.jpeg" },
];

const featuredProducts = [
  { id: 1, name: "Black Side Table", price: 100, image: "/images/image12.jpeg" },
  { id: 2, name: "Wood Storage Unit", price: 100, image: "/images/image13.jpeg" },
  { id: 3, name: "White Shelf Cube", price: 100, image: "/images/image14.jpeg" },
  { id: 4, name: "Metal Work Desk", price: 100, image: "/images/image15.jpeg" },
  { id: 5, name: "Modern Grey Sofa", price: 100, image: "/images/image16.jpeg" },
];

const productionCategories = [
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Elegant bedroom furniture designed for comfort and tranquility.",
    image: "/images/bedroom.jpeg",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Modern kitchen setups with premium materials and ergonomic design.",
    image: "/images/kitchen.jpeg",
  },
  {
    id: "living-room",
    title: "Living Room",
    description: "Stylish and comfortable pieces for relaxing and hosting.",
    image: "/images/livingRoom.jpeg",
  },
  {
    id: "office",
    title: "Office",
    description: "Functional office furniture optimized for productivity.",
    image: "/images/office.jpeg",
  },
];

const stats = [
  { id: 1, label: "Items Sold", value: 74353 },
  { id: 2, label: "Happy Customers", value: 6333 },
  { id: 3, label: "Years Experience", value: "20+" },
  { id: 4, label: "Partners", value: "20+" },
];

const deals = [
  {
    id: 1,
    title: "PÄLLKRAG Side Table Black",
    rating: 4.7,
    reviews: 120,
    price: "249",
    currency: "USD",
    image: "/images/image7.jpeg",
  },
  {
    id: 2,
    title: "Outdoor Bench Modern",
    rating: 4.1,
    reviews: 88,
    price: "480",
    currency: "USD",
    image: "/images/image14.jpeg",
  },
  {
    id: 3,
    title: "Nordic Style Round Table",
    rating: 4.6,
    reviews: 102,
    price: "399",
    currency: "USD",
    image: "/images/image15.jpeg",
  },
  {
    id: 4,
    title: "Modern Grey Sofa",
    rating: 4.8,
    reviews: 212,
    price: "599–865",
    currency: "USD",
    image: "/images/image16.jpeg",
  },
  {
    id: 5,
    title: "Light Grey Ottoman",
    rating: 4.4,
    reviews: 64,
    price: "179–259",
    currency: "USD",
    image: "/images/image16.jpeg",
  },
];

const testimonial = {
  id: 1,
  name: "John Doe",
  avatar: "/images/avatar-placeholder.jpeg",
  quote:
    "I am absolutely in love with my new living room set. The craftsmanship is outstanding and the pieces feel elegant and comfortable. Delivery was smooth and everything was set up perfectly.",
};

const news = {
  main: {
    id: 1,
    date: "2025-01-03",
    tag: "Featured",
    title: "The Art of Choosing Furniture That Complements Your Space",
    text: "Discover how to select modern furniture that blends harmoniously with your home.",
    image: "/images/image7.jpeg",
  },
  side: [
    {
      id: 2,
      tag: "On the blog",
      title: "Sustainable Materials: The Future of Furniture Design",
      image: "/images/image7.jpeg",
    },
    {
      id: 3,
      tag: "On the blog",
      title: "How Minimalist Design Can Transform Your Living Room",
      image: "/images/image7.jpeg",
    },
  ],
};

module.exports = {
  products,
  featuredProducts,
  productionCategories,
  stats,
  deals,
  testimonial,
  news,
};
