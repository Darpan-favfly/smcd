import { createClient } from "@/prismicio";
import ProductSlider from "./ProductSlider";

const RecommendedProductsSection = async () => {
  const client = createClient();

  const doc = await client.getByType("product_page", {
    pageSize: 12,
  });

  return (
    <section>
      <div className="container">
        <div className="recommended-products-section">
          <h2 className="mb-4">Recommended Products</h2>
          <ProductSlider products={doc?.results} />
        </div>
      </div>
    </section>
  );
};

export default RecommendedProductsSection;
