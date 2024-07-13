import ProductListingSection from "@/components/product/ProductListingSection";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
const ShopPage = async () => {
  const client = createClient();
  const doc = await client.getAllByType("product_page");
  const slices = await client.getSingle("shop_page");

  return (
    <>
      <SliceZone slices={slices.data.slices} components={components} />
      <ProductListingSection data={doc} />
    </>
  );
};

export default ShopPage;
