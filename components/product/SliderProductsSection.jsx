"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const SliderProductsSection = () => {
  return (
    <section className="category-carousel container">
      <h2 className="section-title fw-normal fs-30 text-center mb-2">
        Shop By Category
      </h2>
      <p className="font-special fs-13 mb-3 pb-2 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>
      <Splide
        options={{
          perPage: 6,
          gap: 20,
          breakpoints: {
            678: {
              arrows: false,
            },
          },
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <SplideSlide key={index}>
            <SliderProductItem index={index} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

const SliderProductItem = ({ index }) => {
  return (
    <div>
      <img
        loading="lazy"
        className="w-100 h-auto mb-3 border-1"
        src={`https://uomo-html.flexkitux.com/images/home/demo20/category-${
          index + 1
        }.jpg`}
        width={210}
        height={170}
        alt=""
      />
      <h3 className="text-center m-0">
        <a
          href="./shop1.html"
          className="menu-link fw-normal text-uppercase fs-15"
        >
          Bracelets
        </a>
      </h3>
    </div>
  );
};

export default SliderProductsSection;
