import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const CategoriesPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("categories_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export default CategoriesPage;
