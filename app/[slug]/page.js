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

  if (product === null) {
    notFound();
  }
  const doc = product;

  return (
    <>
      <ProductDetailsSection slice={doc.data} uid={doc} />
      <RecommendedProductsSection />
    </>
  );
};
// export async function generateStaticParams() {
//   const client = createClient();

//   const product = await client.getAllByType("product_page");
//   const blog = await client.getAllByType("blog_post");

//   const [product_page, blog_post] = await Promise.all([product, blog]);

//   const docs = [...product_page, ...blog_post];

//   return docs.map((item) => ({
//     slug: item.uid,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const client = createClient();

//   const product = await client
//     .getByUID("product_page", params.slug)
//     .catch(() => null);

//   const blog = await client
//     .getByUID("blog_post", params.slug)
//     .catch(() => null);

//   // Wait for the promises to resolve
//   const [product_page, blog_post] = await Promise.all([product, blog]);

//   if (product_page === null && blog_post === null) {
//     notFound();
//   }
//   const page = product_page || blog_post;

//   return Seo(page);
// }

// return (
//   <>
//     <ProductDetailsSection />
//     <RecommendedProductsSection />
//   </>
// );

export default CustomPage;
