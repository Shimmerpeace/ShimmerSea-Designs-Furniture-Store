import { useEffect, useState } from "react";

function DealsSection() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/deals")
      .then((res) => res.json())
      .then(setDeals)
      .catch((err) => console.error("Failed to load deals", err));
  }, []);

  return (
    <section className="deals-section">
      <div className="header-row">
        <h2>This Week’s Best Furniture Deals</h2>
        <div className="arrows">
          <button type="button" aria-label="Previous deal">
            {"<"}
          </button>
          <button type="button" aria-label="Next deal">
            {">"}
          </button>
        </div>
      </div>
      <div className="products-row">
        {deals.map((item) => (
          <article key={item.id} className="furniture-product-card">
            <img
              src={item.image}
              alt={item.title}
              className="product-img"
              loading="lazy"
            />
            <div className="product-info">
              <p className="product-title">{item.title}</p>
              <div className="rating">
                ⭐ {item.rating} ({item.reviews})
              </div>
              <div className="price">${item.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DealsSection;
