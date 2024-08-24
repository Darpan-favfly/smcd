"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import HeadingComponent from "../heading/HeadingComponent";

import { useEffect, useRef } from "react";

const CategoriesSection = ({ slice }) => {
  const { heading, sub_heading, video, items, link } = slice?.primary;

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sourceElement = videoElement.querySelector("source");
          sourceElement.src = sourceElement.dataset.src;
          videoElement.load();
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <>
      <section className="section-category categories-section container">
        <HeadingComponent
          data={{
            heading: heading[0].text,
            sub_heading: sub_heading[0].text,
          }}
        />
        <div className="row">
          {/* // ===== 1ST COLUMN ===== */}
          <div className="col-sm-4 d-flex flex-sm-column category-col order-1 order-sm-0">
            {items.slice(0, 2).map((item, index) => (
              <PrismicNextLink field={item.link} className="overflow-hidden">
                <PrismicNextImage
                  className="h-auto"
                  key={index}
                  field={item.image}
                  fallbackAlt=""
                />
              </PrismicNextLink>
            ))}
          </div>

          {/* // ===== 2ND COLUMN ===== */}
          <div className="col-sm-4 video-container category-col order-0">
            <PrismicNextLink field={link} className="overflow-hidden h-100">
              <video
                ref={videoRef}
                className="full-height-video"
                autoPlay
                muted
                loop
              >
                <source data-src={video.url} type="video/mp4" />
              </video>
            </PrismicNextLink>
          </div>

          {/* // ===== 3RD COLUMN ===== */}
          <div className="col-sm-4 d-flex flex-sm-column category-col">
            {items.slice(2, 4).map((item, index) => (
              <PrismicNextLink field={item.link} className="overflow-hidden">
                <PrismicNextImage
                  className="h-auto"
                  key={index}
                  field={item.image}
                  fallbackAlt=""
                />
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
