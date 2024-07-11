import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const PrivacyPolicyPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("privacy_policy_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export default PrivacyPolicyPage;
