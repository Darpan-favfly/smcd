"use client";
import dayjs from "dayjs";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { FiCalendar } from "react-icons/fi";

const BlogHeroSection = ({ data }) => {
  const { heading, description, featured_image, published_date } = data.data;

  return (
    <>
      <div className="place-item layout-02 place-hover">
        <div
          className="place-inner bg-white"
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
            <div className="mb-3 d-flex justify-content-between">
              <div className="d-flex" style={{ gap: 14 }}>
                <div className="meta_date">
                  <i
                    style={{
                      fontSize: 16,
                      position: "relative",
                      top: -1,
                      marginRight: 5,
                    }}
                  >
                    <FiCalendar />
                  </i>
                  <span>{dayjs(published_date).format("MMMM DD, YYYY")}</span>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between _align-items-center"
              style={{ flexDirection: "column" }}
            >
              <h1 className="place-title blog_title pb-2">
                {heading[0]?.text}
              </h1>
            </div>
            <div className="blog_description mb-3">
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

      <style jsx>{`
        .blog_title {
          font-size: 30px;
          font-weight: 700;
          line-height: 1.5;
          color: #333;
        }

        .blog_description {
          font-size: 18px;
          line-height: 1.7;
          color: #333;
        }

        @media (max-width: 767px) {
          .blog_title {
            font-size: 22px;
            line-height: 1.4;
          }

          .blog_description {
            font-size: 14px;
            line-height: 1.6;
          }
        }
      `}</style>
    </>
  );
};

export default BlogHeroSection;
