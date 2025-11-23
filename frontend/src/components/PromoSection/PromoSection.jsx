import image1 from "../../assets/image1.jpeg";
import "./PromoSection.css";

export default function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-text">
        <h3 className="promo-tag">UP TO 30% OFF!</h3>
        <h1 className="promo-title">Perfect Cabinets For Your Living Room!</h1>
        <p className="promo-desc">
          Get the perfect cabinet design for your living room. Shop amazing
          limited-time offers.
        </p>
        <button className="promo-btn">Shop Now</button>
      </div>
      <img src={image1} alt="Promo" className="promo-img" />
    </section>
  );
}
