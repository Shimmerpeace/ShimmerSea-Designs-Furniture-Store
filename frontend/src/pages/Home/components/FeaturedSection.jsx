import { useEffect, useState } from "react";

function FeaturedSection() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/featured")
      .then((res) => res.json())
      .then(setFeatured)
      .catch((err) => console.error("Failed to load featured products", err));
  }, []);

  return (
    <section className="featured-section" aria-label="Featured products">
      <h2>Featured Products</h2>
      <div className="featured-carousel" role="region" aria-label="Featured products carousel">
        <button type="button" className="carousel-btn" aria-label="Previous featured product">
          &lt;
        </button>
        <div className="featured-list" aria-live="polite">
          {featured.map((item) => (
            <article key={item.id} className="featured-card" tabIndex={0}>
              <img
                src={item.image}
                alt={item.name}
                className="featured-img"
                loading="lazy"
              />
              <p className="featured-name">{item.name}</p>
              <p className="featured-price">${item.price}</p>
            </article>
          ))}
        </div>
        <button type="button" className="carousel-btn" aria-label="Next featured product">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default FeaturedSection;

