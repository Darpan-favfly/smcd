import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const ShippingPolicyPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("shipping_policy_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export default ShippingPolicyPage;
