import HeadingComponent from "../heading/HeadingComponent";
import { createClient } from "@/prismicio";
import dayjs from "dayjs";
import { PrismicNextImage } from "@prismicio/next";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";

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
              <BlogItem key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const BlogItem = ({ data }) => {
  const { uid } = data;

  const { heading, featured_image, published_date } = data.data;

  const url = `/blog/${uid}`;

  return (
    <>
      <div className="blog-grid__item">
        <Link href={url} className="blog-grid__item-image d-inline-block mb-0">
          <PrismicNextImage className="h-auto" field={featured_image} />
        </Link>
        <div className="blog-grid__item-detail">
          <div className="blog-grid__item-meta">
            <span className="blog-grid__item-meta__date">
              <i
                style={{
                  position: "relative",
                  top: "-2px",
                  fontSize: ".8rem",
                  marginRight: "8px",
                }}
              >
                <FiCalendar />
              </i>
              {dayjs(published_date).format("MMMM DD, YYYY")}
            </span>
          </div>
          <div className="blog-grid__item-title">
            <div className="link-container">
              <Link href={url} className="blog-link">
                <h3>{heading[0].text}</h3>
              </Link>
            </div>
          </div>
          <div className="blog-grid__item-content">
            <Link href={url} className="link-container readmore-link">
              Continue Reading
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSection;
