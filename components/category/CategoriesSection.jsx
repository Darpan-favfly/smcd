import { PrismicNextImage } from "@prismicio/next";
import HeadingComponent from "../heading/HeadingComponent";
import Link from "next/link";

const CategoriesSection = ({ slice }) => {
  const { heading, sub_heading, video, items, link } = slice?.primary;

  return (
    <>
      <section className="section-category">
        <HeadingComponent
          data={{
            heading: heading[0].text,
            sub_heading: sub_heading[0].text,
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              {items.slice(0, 2).map((item, index) => (
                <Link
                  href={item ? item.link.url : "/"}
                  className="overflow-hidden"
                >
                  <PrismicNextImage
                    className="h-auto"
                    key={index}
                    field={item.image}
                    alt={item.image.alt}
                  />
                </Link>
              ))}
            </div>
            <div className="col-lg-4 video-container" style={{ gap: 15 }}>
              <Link
                href={link.url}
                style={{ height: "100%" }}
                className="overflow-hidden"
              >
                <video className="full-height-video" autoPlay muted loop>
                  <source src={video.url} type="video/mp4" />
                </video>
              </Link>
            </div>
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              {items.slice(2, 4).map((item, index) => (
                <Link
                  href={item ? item.link.url : "/"}
                  className="overflow-hidden"
                >
                  <PrismicNextImage
                    className="h-auto"
                    key={index}
                    field={item.image}
                    alt={item.image.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
