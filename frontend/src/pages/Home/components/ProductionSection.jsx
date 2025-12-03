import bedroomImg from "../../../assets/bedroom.jpeg";
import kitchenImg from "../../../assets/kitchen.jpeg";
import livingRoomImg from "../../../assets/livingRoom.jpeg";
import officeImg from "../../../assets/office.jpeg";

const categories = [
{
id: "bedroom",
title: "Bedroom",
description: "Elegant bedroom furniture designed for comfort and tranquility.",
image: bedroomImg,
},
{
id: "kitchen",
title: "Kitchen",
description: "Modern kitchen setups with premium materials and ergonomic design.",
image: kitchenImg,
},
{
id: "living-room",
title: "Living Room",
description: "Stylish and comfortable pieces for relaxing and hosting.",
image: livingRoomImg,
},
{
id: "office",
title: "Office",
description: "Functional office furniture optimized for productivity.",
image: officeImg,
},
];

function ProductionSection() {
return (
<section className="production-section">
<div className="highlight-bar">
<p>Affordable is not just a name, it is a promise.</p>
<button type="button" className="btn btn-dark">
Get a Quote
</button>
</div>

  <div className="production-header">
    <div>
      <h2>What We Produce</h2>
      <hr />
    </div>
    <p>
      At ShimmerSea Designs, we design and manufacture furniture that blends modern aesthetics and long-lasting craftsmanship, built with premium materials.
    </p>
  </div>

  <div className="production-grid">
    {categories.map((item) => (
      <article key={item.id} className="category-card">
        <div className="category-image-wrapper">
          <img src={item.image} alt={item.title} loading="lazy" />
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </article>
    ))}
  </div>
</section>
);
}

export default ProductionSection;