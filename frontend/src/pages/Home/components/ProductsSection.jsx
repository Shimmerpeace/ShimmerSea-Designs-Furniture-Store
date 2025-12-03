import { useEffect, useState } from "react";

function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => {
        console.error("Failed to load products", err);
      });
  }, []);

  return (
    <section className="products-section" aria-labelledby="products-heading">
      <h2 id="products-heading">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
              loading="lazy"
            />
            <p className="product-name">{product.name}</p>
          </article>
        ))}
      </div>
      <button type="button" className="btn btn-outline center">
        All Products
      </button>
    </section>
  );
}

export default ProductsSection;
