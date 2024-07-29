import BlogHeroSection from "@/components/blog/BlogHeroSection";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import BookingWidget from "@/components/widget/BookingWidget";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }) => {
  const client = createClient();
  const blog = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);
  if (blog === null) {
    notFound();
  }
  const doc = blog;
  return (
    <section className="bg-gray mt-5">
      <div className="container px-2">
        <div className="row gx-1">
          <div className="col-lg-7 px-2 px-md-3">
            <div className="place__left">
              <div
                className="blog-post d-flex flex-column pb-5"
                style={{ rowGap: "30px" }}
              >
                <BlogHeroSection data={blog} />
                <SliceZone slices={doc.data.slices} components={components} />
              </div>
            </div>
          </div>
          <aside className="col-lg-4 mx-auto">
            <div className="sidebar sidebar--shop sidebar--border fixed p-0 mb-5">
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

  const blog = await client.getAllByType("blog_post");

  const docs = [blog];

  return docs.map((item) => ({
    slug: item.uid,
  }));
}

export async function generateMetadata({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("blog_post", params.slug)
    .catch(() => null);

  if (page === null) {
    notFound();
  }

  return Seo(page);
}
export default BlogPage;
