import BlogsSection from "@/components/blogs/BlogsSection";
import CategoriesSection from "@/components/category/CategoriesSection";
import CollectionsSection from "@/components/collections/CollectionsSection";
import CtaSection from "@/components/cta/CtaSection";
import OfferCtaSection from "@/components/cta/OfferCtaSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HeroSection from "@/components/hero/HeroSection";
import InstagramSection from "@/components/instagramgallery/InstagramSection";
import FeaturedProductSection from "@/components/product/FeaturedProductSection";
import SliderProductsSection from "@/components/product/SliderProductsSection";
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
