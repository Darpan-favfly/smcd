import HeadingComponent from "../heading/HeadingComponent";
import { createClient } from "@/prismicio";
import dayjs from "dayjs";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const BlogsSection = async ({ slice }) => {
  const { sub_heading, heading, number } = slice?.primary || {};

  const client = createClient();
  let doc = null;

  if (number) {
    let tempDoc = await client.getByType("blog_post", {
      orderings: {
        field: "my.blog_post.published_date",
        direction: "desc",
      },
      pageSize: number,
    });
    doc = tempDoc?.results;
  } else {
    doc = await client.getAllByType("blog_post", {
      orderings: {
        field: "my.blog_post.published_date",
        direction: "desc",
      },
    });
  }

  return (
    <>
      <section>
        <HeadingComponent
          data={{
            sub_heading: sub_heading,
            heading: heading[0].text,
          }}
        />
        <div className="container">
          <div className="blog-grid row row-cols-2 row-cols-md-2 row-cols-xl-4">
            {doc.map((item, index) => (
              <div className="blog-grid__item" key={index}>
                <div className="blog-grid__item-image">
                  <PrismicNextImage
                    loading="lazy"
                    className="h-auto"
                    field={item.data.featured_image}
                    width={450}
                    alt=""
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="blog-grid__item-detail">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">
                      {item.subHeading}
                    </span>
                    <span className="blog-grid__item-meta__date">
                      {dayjs(item.data.published_date).format("MMMM DD, YYYY")}
                    </span>
                  </div>
                  <div className="blog-grid__item-title">
                    <div className="link-container">
                      <PrismicNextLink
                        href={`blog/${item.uid}`}
                        className="blog-link"
                      >
                        {item.data.heading[0].text}
                      </PrismicNextLink>
                    </div>
                  </div>
                  <div className="blog-grid__item-content">
                    {/* <p>{item.description}</p> */}
                    <div className="link-container">
                      <PrismicNextLink
                        href={`blog/${item.uid}`}
                        className="readmore-link"
                      >
                        Continue Reading
                      </PrismicNextLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
