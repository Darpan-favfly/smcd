import ProductDetailsSection from "@/components/product/ProductDetailsSection";
import RecommendedProductsSection from "@/components/product/RecommendedProductSection";
import Seo from "@/lib/seo/Seo";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

const CustomPage = async ({ params }) => {
  const client = createClient();

  const product = await client
    .getByUID("product_page", params.slug)
    .catch(() => notFound());

  return (
    <>
      <ProductDetailsSection
        data={{ ...product.data, id: product.id, uid: product?.uid }}
      />
      <RecommendedProductsSection />
    </>
  );
};

export async function generateMetadata({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("product_page", params.slug)
    .catch(() => notFound());

  return Seo(page);
}

export default CustomPage;
