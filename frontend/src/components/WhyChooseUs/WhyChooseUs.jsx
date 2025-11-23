
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  

  return (
    <section className="why-container">
      

      <div className="why-header">
        <h2>Why Choose Us</h2>
        <p>
          At DecoCreatingShop, we strive to craft new furniture — we craft
          experiences. Every design reflects sophistication, quality, and
          comfort, giving your home the style you’ve always desired.
        </p>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <span className="why-number">01</span>
          <h3>Crafted with Precision</h3>
          <p>
            Skilled artisans handcraft each piece with meticulous attention to
            detail, ensuring durability and timeless appeal.
          </p>
          <div className="why-icon">[icon]</div>
        </div>

        <div className="why-card">
          <span className="why-number">02</span>
          <h3>Sustainable Materials.</h3>
          <p>
            Eco–friendly, responsibly sourced materials. Designed with the
            planet in mind without compromising style.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number">03</span>
          <h3>Designed for Every Space.</h3>
          <p>
            Modern, minimal, or classic — our furniture blends seamlessly with
            any interior style.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number large">04</span>
          <h3>Reliable Delivery & Support.</h3>
          <p>
            Enjoy a smooth shopping experience with fast delivery and friendly
            customer support you can count on.
          </p>
        </div>
      </div>
    </section>
  );
}
