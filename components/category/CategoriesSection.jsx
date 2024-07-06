"use client";
import { PrismicNextImage } from "@prismicio/next";
import HeadingComponent from "../heading/HeadingComponent";

const CategoriesSection = ({ slice }) => {
  const { heading, sub_heading, video, items } = slice.primary;
  const imagesColumn1 = [
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-ring-24052024.jpg",
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-bangle-24052024.jpg",
  ];

  const imagesColumn3 = [
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-earring-24052024.jpg",
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-mangalsutra-24052024.jpg",
  ];
  console.log(slice);
  return (
    <>
      <section className="section-category">
        <HeadingComponent
          data={{
            heading: heading[0].text,
            description: sub_heading[0].text,
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              {items.slice(0, 2).map((item, index) => (
                <PrismicNextImage
                  className="h-auto"
                  key={index}
                  field={item.image}
                  fallbackAlt={item.image.alt}
                />
              ))}
            </div>
            <div className="col-lg-4 video-container" style={{ gap: 15 }}>
              <video className="full-height-video" autoPlay muted loop>
                <source src={video.url} type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              {items.slice(2, 4).map((item, index) => (
                <PrismicNextImage
                  className="h-auto"
                  key={index}
                  field={item.image}
                  fallbackAlt={item.image.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
