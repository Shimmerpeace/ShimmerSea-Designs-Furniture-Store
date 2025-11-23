import "./Home.css";
import ProductComponent from "../../components/Product/Product";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main className="home">
      <section className="top-section">
        <div className="top-margin-wrapper">
          <h1>
            <span className="highlight">Furniture</span> Solutions.
            <br />
            Affordable Prices.
          </h1>
          <p>
            Discover modern furniture that blends comfort, craftsmanship, and
            modern design. Our pieces elevate your home or workspace into a
            beautifully built, sustainable, and stylish environment.
          </p>
          <div className="top-section-buttons">
            <button className="primary-btn">EXPLORE MORE</button>
            <button className="secondary-btn">REQUEST QUOTE</button>
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="bottom-margin-wrapper">
          <div className="yellow-banner">
            <p>Affordable is NOT just a Name, it's a Promise!</p>
            <button className="quote-btn">GET A QUOTE</button>
          </div>

          <section className="produce">
            <div className="produce-text">
              <div>
                <h2>What we Produce.</h2>
                <hr />
              </div>
              <p>
                At Sea Concepts, we design and manufacture furniture pieces
                blending modern aesthetics and long-lasting craftsmanship. Built
                with premium materials.
              </p>
            </div>
            <div className="card-grid">
              <div className="card">
                <div className="card-image bedroom"></div>
                <div>
                  <h3>BEDROOM</h3>
                  <p>
                    Elegant bedroom furniture designed for comfort and
                    tranquility.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-image kitchen"></div>
                <div>
                  <h3>KITCHEN</h3>
                  <p>
                    Modern kitchen setups with premium materials and ergonomic
                    design.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-image livingRoom"></div>
                <div>
                  <h3>LIVING ROOM</h3>
                  <p>
                    Stylish and comfortable pieces for relaxing and hosting.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-image office"></div>
                <div>
                  <h3>OFFICE</h3>
                  <p>Functional office furniture optimized for productivity.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ProductComponent />
      <WhyChooseUs />
    </main>
  );
}
