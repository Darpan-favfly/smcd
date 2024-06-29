"use client";
import { usePathname } from "next/navigation";
import ProductDetailsSection from "@/components/product/ProductDetailsSection";
import RecommendedProductsSection from "@/components/product/RecommendedProductSection";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BlogCtaSection from "@/components/cta/CtaBlogSection";

const CustomPage = () => {
  const pathname = usePathname();

  // Conditional rendering based on the pathname
  if (pathname === "/blog-post") {
    return (
      <div>
        <BlogHeroSection />
        <BlogDetailSection />
        <BlogCtaSection />
      </div>
    );
  }

  return (
    <>
      <ProductDetailsSection />
      <RecommendedProductsSection />
    </>
  );
};

export default CustomPage;
