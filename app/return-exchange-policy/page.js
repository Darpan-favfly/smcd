import Seo from "@/lib/seo/Seo";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const ReturnExchangePolicyPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("return_exchange_policy");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("return_exchange_policy");

  return Seo(page);
}

export default ReturnExchangePolicyPage;
