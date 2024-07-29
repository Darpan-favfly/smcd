import ProductListingSection from "@/components/product/ProductListingSection";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";

const DealPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("deals_page");
  const uid = doc.uid;
  const products = await client.getAllByType("product_page", {
    fetchLinks: ["deal.uid"],
  });

  const product = products.filter((product) => {
    return product.data.deal.uid === uid;
  });

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
      <ProductListingSection data={product} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("product_page");

  return Seo(page);
}

export default DealPage;
