function WhyChooseUs() {
  const items = [
    {
      id: 1,
      title: "Crafted with Precision",
      text: "Skilled artisans handcraft each piece with meticulous attention to detail, ensuring durability and timeless appeal.",
    },
    {
      id: 2,
      title: "Sustainable Materials",
      text: "Eco friendly, responsibly sourced materials designed with the planet in mind without compromising style.",
    },
    {
      id: 3,
      title: "Designed for Every Space",
      text: "Modern, minimal, or classic, our furniture blends seamlessly with any interior style.",
    },
    {
      id: 4,
      title: "Reliable Delivery and Support",
      text: "Enjoy a smooth shopping experience with fast delivery and friendly customer support you can count on.",
    },
  ];

  return (
    <section className="why-section">
      <header className="why-header">
        <h2>Why Choose Us</h2>
        <p>
          At ShimmerSea Designs, we do not just craft new furniture, we craft
          experiences. Every design reflects sophistication, quality, and
          comfort.
        </p>
      </header>
      <div className="why-grid">
        {items.map((item) => (
          <article key={item.id} className="why-card">
            <span className="why-number">
              {String(item.id).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
