import ProductListingSection from "@/components/product/ProductListingSection";
import Seo from "@/lib/seo/Seo";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const CategoriesProductPage = async ({ params }) => {
  const client = createClient();

  const doc = await client
    .getByUID("category_page", params.slug)
    .catch(() => notFound());

  const uid = doc.uid;
  const products = await client.getAllByType("product_page", {
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

export async function generateMetadata({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("category_page", params.slug)
    .catch(() => notFound());

  return Seo(page);
}

export default CategoriesProductPage;
