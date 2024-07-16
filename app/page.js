import OfferCtaSection from "@/components/cta/OfferCtaSection";
import Seo from "@/lib/seo/Seo";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const HomePage = async () => {
  const client = createClient();

  const doc = await client.getSingle("home_page");

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};
export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("home_page");

  return Seo(page);
}
export default HomePage;
