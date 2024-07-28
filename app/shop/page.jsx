import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";

import ProductListingSection from "@/components/product/ProductListingSection";

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

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("home_page");

  return Seo(page);
}

export default ShopPage;
