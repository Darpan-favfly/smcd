import ProductListingSection from "@/components/product/ProductListingSection";
import Seo from "@/lib/seo/Seo";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const CategoriesProductPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("category_page");
  const uid = doc.uid;
  const products = await client.getAllByType("product_page", {
    // filters: [prismic.filter.fulltext("my.product_page.title", searchKey)],
    fetchLinks: ["category.name", "category.uid"],
  });

  const product = products.filter((product) => {
    return product.data.category.uid === uid;
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

  const page = await client.getSingle("category_page");

  return Seo(page);
}

export default CategoriesProductPage;
