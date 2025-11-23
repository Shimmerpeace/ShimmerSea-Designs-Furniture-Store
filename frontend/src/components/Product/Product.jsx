import "./Product.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import PromoSection from "../PromoSection/PromoSection";

export default function ProductComponent() {
  return (
    <section className="productContainer">
      <ProductsGrid />
      <FeaturedProducts />
      <PromoSection />
    </section>
  );
}
