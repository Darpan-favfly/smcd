import ProductListingSection from "@/components/product/ProductListingSection";
import { createClient } from "@/prismicio";
const ShopPage = async () => {
  const client = createClient();
  const doc = await client.getAllByType("product_page");

  return (
    <>
      <ProductListingSection data={doc} />
    </>
  );
};

export default ShopPage;
