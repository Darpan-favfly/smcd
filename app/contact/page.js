import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import MapSection from "@/components/map/MapSection";
import Seo from "@/lib/seo/Seo";

const ContactPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("contact_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
      <MapSection data={doc.data.slices[1]} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("contact_page");

  return Seo(page);
}

export default ContactPage;
