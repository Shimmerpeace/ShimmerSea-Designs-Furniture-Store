<h1>📣 ShimmerSea Designs Furniture Store – Full‑Stack React App</h1>
<hr/>
![Live Demo](https://shimmer-homes.vercel.app/)
<br/>
<br/>
<p>ShimmerSea Designs Furniture Store is a full‑stack furniture catalog and marketing site with a React frontend and a Node/Express backend API. 
It showcases modern furniture products, featured deals, promotions, testimonials, and news, all driven by structured data and ready to be wired to a real database with Mongoose.</p>

[🚀 Live Demo](👉 View Live on Vercel)

<h2>🌟 Features </h2>
<ul>
  <li>Responsive, multi-section homepage (hero, products, featured deals, promo banners, testimonials, news).</li>
   <li>Modular React components for easy maintenance.</li>
   <li>Node.js + Express backend API for structured data delivery.</li>
   <li>Ready for MongoDB with Mongoose integration.</li>
   <li>Accessible markup and keyboard navigation.</li>
   <li>Deployed with Vercel for seamless frontend hosting.</li>
</ul>

<h2>🚀 Tech Stack</h2>
<ul>
  <li>Frontend: React, CSS (modular BEM‑style classes, responsive layout)</li>
   <li>Backend: Node.js, Express</li>
   <li>Database (optional): MongoDB with Mongoose</li>
   <li>Deployment: Vercel (frontend), local or cloud-hosted backend</li>
</ul>

<h2>🖼 Screenshots</h2>
![Homepage](https://shimmer-homes.vercel.app/screenshotshttps://shimmer-homes.vercel.app/screenshots️ Quick Start

<h2>Prerequisites</h2>
`Node.js 18+
npm or yarn`

1. Clone the repository

`git clone https://github.com/your-username/shimmer-homes.git
cd shimmer-homes`

2. Install and run the backend

`cd backend
npm install
npm run dev`
Backend runs on http://localhost:5000

3. Install and run the frontend

´cd frontend
npm install
npm start`
Frontend runs on http://localhost:3000 and connects to the backend at http://localhost:5000.

<h2>📚 Backend Details</h2>
<ul>
  <li>Data for homepage sections is managed in `backend/src/data/homeData.js`</li>
  <li>Controllers and routes in `backend/src/controllers` and `backend/src/routes`</li>
  <li>Ready for MongoDB with Mongoose (install via `npm install mongoose`and update connection in `server.js`)</li>
</ul>

<h2>🧩 Frontend Details</h2>

<ul>
<li>Homepage composed from modular React components (IntroSection, ProductionSection, ProductsSection, etc.)</li>
<li>Components fetch data from the backend API for dynamic content</li>
</ul>

<h2>🚀 Deployment</h2>

<h3>Frontend</h3>
<ul>
<li>Deployed on Vercel: https://shimmer-homes.vercel.app/</li>
<li>Project root: frontend</li>
<li>Environment variables: REACT_APP_API_URL=http://localhost:5000 (or your backend URL)
</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Hosted on any Node.js platform (Render, Railway, Fly.io, etc.)</li>
<li>Ensure /api/home endpoints are exposed and accessible</li>
</ul>

<h2>📝 Roadmap</h2>

<ul>
<li>Integrate real MongoDB models and admin CRUD for products/deals</li>
<li>Add authentication and dashboard for managing promotions</li>
<li>Implement carousel logic with keyboard navigation</li>
<li>Add tests (Jest, React Testing Library)</li>
<li>Add CI/CD with GitHub Actions</li>
</ul>
