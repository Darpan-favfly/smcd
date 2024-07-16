import ProductListingSection from "@/components/product/ProductListingSection";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
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

  console.log(product);

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
      <ProductListingSection data={product} />
    </>
  );
};

export default DealPage;
