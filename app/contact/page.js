import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import MapSection from "@/components/map/MapSection";

const ContactPage = async () => {
  const client = createClient();
  const doc = await client.getSingle("contact_page");
  return (
    <>
      {/* <SecondaryHeroSection />
      <ContactSection /> */}
      <SliceZone slices={doc.data.slices} components={components} />
      <MapSection data={doc.data.slices[1]} />
    </>
  );
};

export default ContactPage;
