"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ProductItem } from "./ProductListingSection";

const ProductSlider = ({ products }) => {
  return (
    <Splide
      options={{
        type: "loop",
        pagination: false,
        arrows: true,
        gap: "1rem",
        perPage: 4,
        breakpoints: {
          768: {
            perPage: 3,
          },
          575: {
            perPage: 2,
          },
        },
      }}
    >
      {products.map((product) => (
        <SplideSlide key={product.id}>
          <ProductItem data={product} fullCol={true} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductSlider;
