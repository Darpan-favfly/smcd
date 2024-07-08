import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const BlogsPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("blogs_page");

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export default BlogsPage;
