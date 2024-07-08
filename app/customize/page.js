import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

import RecommendedProductsSection from "@/components/product/RecommendedProductSection";

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

export default CustomizePage;
