import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.jpeg";
import image8 from "../../assets/image8.jpeg";
import image9 from "../../assets/image9.jpeg";
import image10 from "../../assets/image10.jpeg";
import image11 from "../../assets/image11.jpeg";
import image12 from "../../assets/image1.jpeg";
import image13 from "../../assets/image1.jpeg";
import image14 from "../../assets/image1.jpeg";

import "./ProductsGrid.css";

export default function ProductsGrid() {
  const products = [
    { name: "Abesto Comfy Chair", img: image6 },
    { name: "Allan Garco Occasional Chair", img: image7 },
    { name: "Banozon Table", img: image8 },
    { name: "Herimann Sofa", img: image9 },
    { name: "Rider Chair", img: image10 },
    { name: "Adwell Full Sleigh Bed", img: image11 },
    { name: "Sofa Grey", img: image12 },
    { name: "Stool Beige Ottoman", img: image13 },
    { name: "Adwell Full Sleigh Bed Grey", img: image14 },
  ];
  return (
    <section className="products-section">
      <h2 className="section-title">Our Products</h2>

      <div className="product-nav-menu">
        <span>Living Room</span>
        <span> Kitchen</span>
        <span>Office</span>
        <span>Bedroom</span>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt="" className="product-img" />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
      <button className="all-products-btn">All Products</button>
    </section>
  );
}
