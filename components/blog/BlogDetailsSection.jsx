import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const BlogDetailsSection = ({ slice }) => {
  return (
    <>
      <div className="place-item layout-02 place-hover">
        <div className="place-inner bg-white">
          <div className="entry-detail p-2 p-md-3">
            <div className="blog_content">
              <div style={{ padding: "0px 5px" }}>
                <PrismicRichText field={slice?.primary?.details} />
              </div>
              <div className="image-blog image-1">
                <div className="position-relative" style={{ width: "100%" }}>
                  <PrismicNextImage
                    loading="lazy"
                    height={"auto"}
                    field={slice?.primary?.image}
                    style={{ width: "100%", borderRadius: "15px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsSection;
