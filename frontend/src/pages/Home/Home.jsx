/* eslint-disable no-irregular-whitespace */
/*
import "./Home.css";
import IntroSection from "./components/IntroSection";
import ProductionSection from "./components/ProductionSection";
import ProductsSection from "./components/ProductsSection";
import FeaturedSection from "./components/FeaturedSection";
import PromoSection from "./components/PromoSection";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsBar from "./components/StatsBar";
import DealsSection from "./components/DealsSection";
import PromoTableSection from "./components/PromoTableSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsSection from "./components/NewsSection";

function Home() {
return (
<main className="home">
<IntroSection />
<ProductionSection />
<ProductsSection />
<FeaturedSection />
<PromoSection />
<WhyChooseUs />
<StatsBar />
<DealsSection />
<PromoTableSection />
<TestimonialSection />
<NewsSection />
</main>
);
}

export default Home;
*/
// Home.jsx
// Home.jsx
import image1 from "../../assets/image1.jpeg";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.jpeg";
import image8 from "../../assets/image8.jpeg";
import image9 from "../../assets/image9.jpeg";
import image10 from "../../assets/image10.jpeg";
import image11 from "../../assets/image11.jpeg";
import image12 from "../../assets/image12.jpeg";
import image13 from "../../assets/image13.jpeg";
import image14 from "../../assets/image14.jpeg";
import image15 from "../../assets/image15.jpeg";
import image16 from "../../assets/image16.jpeg";
import image17 from "../../assets/image16.jpeg";
import image18 from "../../assets/image16.jpeg";

import "./Home.css";

const dealproducts = [
  {
    id: 1,
    title: "PÄLLKRAG Side Table Black",
    rating: 4.7,
    reviews: 120,
    price: "$249",
    img: image7,
  },
  {
    id: 2,
    title: "Outdoor Bench Modern",
    rating: 4.1,
    reviews: 88,
    price: "$480",
    img: image14,
  },
  {
    id: 3,
    title: "Nordic Style Round Table",
    rating: 4.6,
    reviews: 102,
    price: "$399",
    img: image15,
  },
  {
    id: 4,
    title: "Modern Grey Sofa",
    rating: 4.8,
    reviews: 212,
    price: "$599 – $865",
    img: image17,
  },
  {
    id: 5,
    title: "Light Grey Ottoman",
    rating: 4.4,
    reviews: 64,
    price: "$179 – $259",
    img: image18,
  },
];

function Home() {
  const products = [
    { name: "Abesto Comfy Chair", img: image6 },
    { name: "Allan Garco Occasional Chair", img: image7 },
    { name: "Banozon Table", img: image8 },
    { name: "Herimann Sofa", img: image9 },
    { name: "Rubens Chair", img: image10 },
    { name: "Adwell Full Sleigh Bed", img: image11 },
    { name: "Sofa Grey", img: image12 },
    { name: "Stool Beige Ottoman", img: image13 },
    { name: "Adwell Full Sleigh Bed Grey", img: image14 },
  ];

  const featured = [
    { name: "Black Side Table", price: "$100", img: image12 },
    { name: "Wood Storage Unit", price: "$100", img: image13 },
    { name: "White Shelf Cube", price: "$100", img: image14 },
    { name: "Metal Work Desk", price: "$100", img: image15 },
    { name: "Modern Grey Sofa", price: "$100", img: image16 },
  ];

  return (
    <div className="home-container">
      <section className="intro">
        <div className="intro-section-wrapper">
          <h1>
            <span>Furniture</span> Solutions.
            <br />
            Affordable Prices.
          </h1>
          <p>
            Discover modern furniture that blends comfort, craftsmanship, and
            modern design. Our pieces elevate your home or workspace into a
            beautifully built, sustainable, and stylish environment.
          </p>
          <div className="intro-actions">
            <button>EXPLORE MORE</button>
            <button>REQUEST QUOTE</button>
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="bottom-section-wrapper">
          <div className="highlight-bar">
            <p>Affordable is Not Just A Name, It's A Promise!</p>
            <button>GET A QUOTE</button>
          </div>

          <section className="production">
            <div className="produce-flex">
              <div>
                <h2 className="produce">What we Produce.</h2>
                <hr />
              </div>

              <p className="produce-text">
                At ShimmerSea Designs, we design and manufacture furniture
                pieces blending modern aesthetics and long-lasting craftsmanship.
                Built with premium materials.
              </p>
            </div>

            <div className="card-grid">
              <div className="card">
                <div className="card-image bedroom"></div>
                <div>
                  <h3>BEDROOM</h3>
                  <p>
                    Elegant bedroom furniture designed for comfort and tranquility.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-image kitchen"></div>
                <div>
                  <h3>KITCHEN</h3>
                  <p>
                    Modern kitchen setups with premium materials and ergonomic design.
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

      <section className="products">
        <h2>Our Products</h2>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </div>
        <button className="all-products-btn">All Products</button>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        <div
          className="featured-carousel"
          role="region"
          aria-label="Featured products carousel"
        >
          <button
            className="carousel-btn"
            aria-label="Previous featured product"
          >
            &lt;
          </button>
          <div className="featured-list">
            {featured.map((item, index) => (
              <div className="featured-card" key={index} tabIndex="0">
                <img src={item.img} alt={item.name} className="featured-img" />
                <p className="featured-name">{item.name}</p>
                <p className="featured-price">{item.price}</p>
              </div>
            ))}
          </div>
          <button className="carousel-btn" aria-label="Next featured product">
            &gt;
          </button>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-text">
          <h3 className="promo-tag">UP TO 30% OFF!</h3>
          <h1 className="promo-title">
            Perfect Cabinets For Your Living Room!
          </h1>
          <p className="promo-desc">
            Get the perfect cabinet design for your living room. Shop amazing
            limited-time offers.
          </p>
          <button className="promo-btn">Shop Now</button>
        </div>
        <img src={image1} alt="Promotional cabinet" className="promo-img" />
      </section>

      <section className="why-choose-us">
        <div className="why-header">
          <h2>Why Choose Us</h2>
          <p>
            At DecoCreatingShop, we strive to craft new furniture — we craft
            experiences. Every design reflects sophistication, quality, and
            comfort, giving your home the style you’ve always desired.
          </p>
        </div>
        <div className="choose-grid">
          <div className="choose-card">
            <span className="choose-number">01</span>
            <h3>Crafted with Precision</h3>
            <p>
              Skilled artisans handcraft each piece with meticulous attention to
              detail, ensuring durability and timeless appeal.
            </p>
            <div className="why-icon" aria-label="Precision icon" role="img">
              [icon]
            </div>
          </div>
          <div className="choose-card">
            <span className="choose-number">02</span>
            <h3>Sustainable Materials</h3>
            <p>
              Eco–friendly, responsibly sourced materials. Designed with the
              planet in mind without compromising style.
            </p>
          </div>
          <div className="choose-card">
            <span className="choose-number">03</span>
            <h3>Designed for Every Space</h3>
            <p>
              Modern, minimal, or classic — our furniture blends seamlessly with
              any interior style.
            </p>
          </div>
          <div className="choose-card">
            <span className="choose-number">04</span>
            <h3>Reliable Delivery & Support</h3>
            <p>
              Enjoy a smooth shopping experience with fast delivery and friendly
              customer support you can count on.
            </p>
          </div>
        </div>
      </section>

      <section
        className="stats-bar"
        role="region"
        aria-label="Company statistics"
      >
        <img
          src={image1}
          alt="Statistics Background"
          className="stats-bg"
          aria-hidden="true"
        />
        <div className="stats-grid">
          <div className="stat">
            <strong>74353</strong>
            <span>Items Sold</span>
          </div>
          <div className="stat">
            <strong>6333</strong>
            <span>Happy Customers</span>
          </div>
          <div className="stat">
            <strong>20+</strong>
            <span>Years Experience</span>
          </div>
          <div className="stat">
            <strong>20+</strong>
            <span>Partners</span>
          </div>
        </div>
      </section>

      <section className="furniture-section">
        <div className="header-row">
          <h2>This Week’s Best Furniture Deals.</h2>

          <div className="arrows">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <div className="products-row">
          {dealproducts.map((item) => (
            <div className="furniture-product-card" key={item.id}>
              <img src={item.img} alt="" className="product-img" />
              <div className="product-info">
                <p className="product-title">{item.title}</p>
                <div className="rating">
                  ⭐ {item.rating} ({item.reviews})
                </div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-table">
        <div className="promo-content">
          <p className="small-title">UP TO 50% OFF</p>
          <h1 className="promo-title">
            Host Perfect Meals <br /> With Discounted <br /> Tables.
          </h1>
          <p className="promo-description">
            Get the best-rated tables for your dining room with huge savings.
            Limited-time offer. Order yours today!
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="promo-table-image">
          <img src={image10} alt="Furniture Display" />
        </div>
      </section>

      <section className="testimonial">
        <div className="quote-box">
          <span className="quote-mark">“</span>
          <p>
            I'm absolutely in love with my new living room set. Craftsmanship is
            outstanding, and the pieces feel elegant and comfortable. Delivery
            was smooth, team made sure everything was set up perfectly. Truly a
            five-star experience!
          </p>

          <div className="testimonial-user">
            <img src={image1} alt="User Placeholder" />
            <span>John Doe</span>
          </div>
          <span className="quote-mark end">”</span>
        </div>
      </section>

      <section className="news-container">
        <h2 className="title">News & updates</h2>
        <div className="news-grid">
          {/* LEFT — LARGE ARTICLE */}
          <div className="large-article">
            <img src={image7} alt="Main article" className="large-img" />

            <div className="large-content">
              <span className="tag">January 3, 2025</span>
              <h3 className="large-heading">
                The Art of Choosing Furniture That Complements Your Space.
              </h3>
              <p className="large-text">
                Discover how to select modern furniture that blends harmoniously
                with spatial aesthetics.
              </p>
            </div>
          </div>

          {/* RIGHT — SMALL ARTICLES COLUMN */}
          <div className="side-column">
            <div className="small-article">
              <img src={image7} alt="Article" className="small-img" />
              <div className="small-content">
                <span className="tag small">On the blog</span>
                <h4 className="small-heading">
                  Sustainable Materials: The Future of Furniture Design.
                </h4>
                <p className="small-text">Read more</p>
              </div>
            </div>

            <div className="small-article">
              <img src={image7} alt="Article" className="small-img" />
              <div className="small-content">
                <span className="tag small">On the blog</span>
                <h4 className="small-heading">
                  How Minimalist Design Can Transform Your Living Room.
                </h4>
                <p className="small-text">Read more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
