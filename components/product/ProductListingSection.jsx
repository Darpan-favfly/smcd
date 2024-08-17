"use client";
import Link from "next/link";
import { cad } from "@/lib/converter/priceConverter";
import { PrismicNextImage } from "@prismicio/next";
import EmblaCarousel from "../ui/carousel/EmblaCarousel";

const ProductListingSection = ({ data }) => {
  return (
    <section>
      <div className="shop-main-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-product-wrapper">
                <div className="shop-product-wrap grid-view row mbn-30">
                  {data.map((item, index) => (
                    <ProductItem key={index} data={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductItem = ({ data, fullCol }) => {
  const { title, image_items, max_price, min_price } = data?.data;

  const url = data?.url;

  const OPTIONS = {
    loop: true,
  };

  return (
    <div className={`${fullCol ? "" : "col-md-3 col-6"}`}>
      <div className="product-item">
        <Link
          href={url}
          className="product-thumb  br-15 overflow-hidden d-inline-block"
        >
          <EmblaCarousel options={OPTIONS}>
            {image_items.map((item, index) => (
              <div className="embla__slide" key={index}>
                <PrismicNextImage
                  className="pri-img h-auto"
                  field={item.image}
                />
              </div>
            ))}
          </EmblaCarousel>
        </Link>
        <div className="product-caption text-center">
          <h6 className="product-name">
            <Link href="/silver-diamond">{title[0]?.text}</Link>
          </h6>
          <div className="price-box ">
            {max_price && min_price && (
              <div className="product-card__price d-flex justify-content-center">
                <span className="money price theme-color fw-bold font-heading">
                  {cad(min_price)} - {cad(max_price)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductItem };

export default ProductListingSection;
