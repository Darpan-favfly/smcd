import ProductDetailsSection from "@/components/product/ProductDetailsSection";
import RecommendedProductsSection from "@/components/product/RecommendedProductSection";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import BookingWidget from "@/components/widget/BookingWidget";
import { notFound } from "next/navigation";

const CustomPage = async ({ params }) => {
  const client = createClient();

  const product = await client
    .getByUID("product_page", params.slug)
    .catch(() => null);

  const blog = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  // Wait for the promises to resolve
  const [product_page, blog_post] = await Promise.all([product, blog]);

  if (product_page === null && blog_post === null) {
    notFound();
  }
  const doc = product_page || blog_post;

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
                {blog_post && <BlogHeroSection data={blog_post} />}
                <SliceZone slices={doc.data.slices} components={components} />
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
};
export async function generateStaticParams() {
  const client = createClient();

  const product = await client.getAllByType("product_page");
  const blog = await client.getAllByType("blog_post");

  const [product_page, blog_post] = await Promise.all([product, blog]);

  const docs = [...product_page, ...blog_post];

  return docs.map((item) => ({
    slug: item.uid,
  }));
}

export async function generateMetadata({ params }) {
  const client = createClient();

  const product = await client
    .getByUID("product_page", params.slug)
    .catch(() => null);

  const blog = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  // Wait for the promises to resolve
  const [product_page, blog_post] = await Promise.all([product, blog]);

  if (product_page === null && blog_post === null) {
    notFound();
  }
  const page = product_page || blog_post;

  return Seo(page);
}

// return (
//   <>
//     <ProductDetailsSection />
//     <RecommendedProductsSection />
//   </>
// );

export default CustomPage;
