import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

const HomePage = async () => {
  const client = createClient();

  const doc = await client.getSingle("home_page");

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
      {/* <SliderProductsSection /> */}
      {/* <CategoriesSection />
      <FeaturesSection />
      <OfferCtaSection />
      <FeaturedProductSection />
      <CollectionsSection />
      <CtaSection />
      <InstagramSection />
      <BlogsSection /> */}
    </>
  );
};

export default HomePage;
