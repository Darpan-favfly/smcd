import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const BlogHeroSection = ({ data }) => {
  const { heading, description, featured_image, published_date } = data.data;

  return (
    <div className="place-item layout-02 place-hover">
      <div
        className="place-inner bg-white mt-3"
        style={{
          boxShadow: "0 0 30px 0 rgb(0 0 0 / 0.07)",
          position: "relative",
          borderRadius: 12,
          MozBorderRadius: 12,
          WebkitBorderRadius: 12,
          msBorderRadius: 12,
          OBorderRadius: 12,
          WebkitBackfaceVisibility: "hidden",
          MozBackfaceVisibility: "hidden",
          overflow: "hidden",
        }}
      >
        <div className="entry-detail p-2 p-md-3">
          <div className="mb-4 d-flex justify-content-between">
            <div className="d-flex" style={{ gap: 14 }}>
              <div className="meta_date">
                <i>
                  <CiCalendarDate />
                </i>
                <span>{dayjs(published_date).format("MMMM DD, YYYY")}</span>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-between _align-items-center"
            style={{ flexDirection: "column" }}
          >
            <h1
              className="place-title blog_title pb-2"
              style={{ fontSize: 30 }}
            >
              {heading[0]?.text}
            </h1>
            {/* <div className="meta_author mb-3">
              <i>
                <CiUser />
              </i>
              <a target="_blank" href="/author/gurupriya-dutta">
                <span style={{ color: "rgb(254, 79, 112)" }}>
                  {}
                </span>
              </a>
            </div> */}
          </div>
          <div className="blog_description mb-3" style={{ fontSize: 16 }}>
            <PrismicRichText field={description} />
          </div>
          <div className="featured-image-blog">
            <PrismicNextImage
              field={featured_image}
              alt={featured_image.alt}
              fetchpriority="high"
              loading="eager"
              width={1200}
              height={600}
              style={{
                color: "transparent",
                height: "auto",
                borderRadius: 15,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
