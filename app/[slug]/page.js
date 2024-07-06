"use client";
import { usePathname } from "next/navigation";
import ProductDetailsSection from "@/components/product/ProductDetailsSection";
import RecommendedProductsSection from "@/components/product/RecommendedProductSection";
import BlogHeroSection from "@/components/blog/BlogHeroSection";

import BookingWidget from "@/components/widget/BookingWidget";
import BlogDetailsSection from "@/components/blog/BlogDetailsSection";

const CustomPage = () => {
  const pathname = usePathname();

  // Conditional rendering based on the pathname
  if (pathname === "/blog-post") {
    return (
      <section className="bg-gray">
        <div className="container-xxl">
          <div className="row gx-1">
            <div className="col-lg-7 px-1 px-md-3">
              <div className="place__left">
                <div
                  className="blog-post d-flex flex-column pb-5"
                  style={{ rowGap: "30px" }}
                >
                  <BlogHeroSection />
                  <BlogDetailsSection />
                </div>
              </div>
            </div>
            <aside className="col-lg-4 mx-auto">
              <div className="sidebar sidebar--shop sidebar--border fixed p-0 ps-lg-3 mb-5 pt-lg-4">
                <BookingWidget id="sticky-form" />
              </div>
            </aside>
          </div>
        </div>
      </section>
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
