import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const AboutPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("about_page");
  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
      {/* <AboutSection />
      <CtaContactSection /> */}
    </>
  );
};

export default AboutPage;
