import ProductListingSection from "@/components/product/ProductListingSection";
import Seo from "@/lib/seo/Seo";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const CollectionsProductPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("collection_page");
  const uid = doc.uid;
  const products = await client.getAllByType("product_page", {
    // filters: [prismic.filter.fulltext("my.product_page.title", searchKey)],
    fetchLinks: ["collection.name", "collection.uid"],
  });

  const product = products.filter((product) => {
    return product.data.collection.uid === uid;
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

  const page = await client.getSingle("collection_page");

  return Seo(page);
}

export default CollectionsProductPage;
