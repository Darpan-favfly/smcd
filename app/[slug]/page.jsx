import ProductDetailsSection from "@/components/product/ProductDetailsSection";
import RecommendedProductsSection from "@/components/product/RecommendedProductSection";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

const CustomPage = async ({ params }) => {
  const client = createClient();

  const product = await client
    .getByUID("product_page", params.slug)
    .catch(() => null);

  if (product === null) {
    notFound();
  }

  return (
    <>
      <ProductDetailsSection
        data={{ ...product.data, id: product.id, uid: product?.uid }}
      />
      <RecommendedProductsSection />
    </>
  );
};

export default CustomPage;
