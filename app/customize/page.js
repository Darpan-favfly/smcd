import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

import RecommendedProductsSection from "@/components/product/RecommendedProductSection";
import Seo from "@/lib/seo/Seo";

const CustomizePage = async () => {
  const client = createClient();

  const doc = await client.getSingle("customize_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
      <RecommendedProductsSection />
    </>
  );
};
export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("customize_page");

  return Seo(page);
}
export default CustomizePage;
