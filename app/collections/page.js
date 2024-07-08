import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

import RecommendedProductsSection from "@/components/product/RecommendedProductSection";

const CollectionsPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("collections_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export default CollectionsPage;
