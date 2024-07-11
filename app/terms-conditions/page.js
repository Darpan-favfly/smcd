import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const TermsConditionPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("terms_condition_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export default TermsConditionPage;
