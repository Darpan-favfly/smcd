"use client";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  FaHeart,
  FaExchangeAlt,
  FaShippingFast,
  FaUndo,
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const ProductDetailsSection = () => {
  const images = [
    "https://htmldemo.net/corano/corano/assets/img/product/product-details-img4.jpg",
    "https://htmldemo.net/corano/corano/assets/img/product/product-details-img5.jpg",
    "https://htmldemo.net/corano/corano/assets/img/product/product-details-img3.jpg",
    "https://htmldemo.net/corano/corano/assets/img/product/product-details-img6.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="product-single container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product-single__media">
            <div className="product-single__image">
              <img
                loading="lazy"
                src={mainImage}
                style={{ width: "100%", borderRadius: "15px" }}
                alt="Main Product"
              />
              <div className="product-single__thumbnail mt-3">
                <Splide
                  options={{
                    perPage: 4,
                    rewind: true,
                    gap: 10,
                  }}
                >
                  {images.map((image, index) => (
                    <SplideSlide key={index}>
                      <div
                        className={`product-single__image-item ${
                          mainImage === image ? "active" : ""
                        }`}
                        onClick={() => setMainImage(image)}
                      >
                        <img
                          loading="lazy"
                          className="h-auto"
                          src={image}
                          style={{ borderRadius: "15px" }}
                          alt={`Thumbnail ${index + 1}`}
                        />
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between mb-4 pb-md-2">
            <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
              <a
                href="#"
                className="menu-link menu-link_us-s text-uppercase fw-medium"
              >
                Home
              </a>
              <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                /
              </span>
              <a
                href="#"
                className="menu-link menu-link_us-s text-uppercase fw-medium"
              >
                The Shop
              </a>
            </div>
            <div className="product-single__prev-next d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
              <a
                href="./product1_simple.html"
                className="text-uppercase fw-medium"
              >
                <FaArrowLeft className="mb-1px" size={10} />
                <span className="menu-link menu-link_us-s">Prev</span>
              </a>
              <a
                href="./product3_external.html"
                className="text-uppercase fw-medium"
              >
                <span className="menu-link menu-link_us-s">Next</span>
                <FaArrowRight className="mb-1px" size={10} />
              </a>
            </div>
          </div>
          <h1 className="product-single__name">
            Lightweight Puffer Jacket With a Hood
          </h1>
          <div className="product-single__rating">
            <div className="reviews-group d-flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="review-star" size={9} />
                ))}
            </div>
            <span className="reviews-note text-lowercase text-secondary ms-1">
              8k+ reviews
            </span>
          </div>
          <div className="product-single__price">
            <span className="current-price">$449</span>
          </div>
          <div className="product-single__short-desc">
            <p>
              Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
              elementum gravida nec dui
            </p>
          </div>
          <form name="addtocart-form" method="post">
            <div className="product-single__swatches">
              <div className="product-swatch text-swatches">
                <label>Sizes</label>
                <div className="swatch-list" style={{ borderRadius: "15px" }}>
                  <input type="radio" name="size" id="swatch-1" />
                  <label className="swatch js-swatch">XS</label>
                  <input type="radio" name="size" id="swatch-2" />
                  <label className="swatch js-swatch">S</label>
                  <input type="radio" name="size" id="swatch-3" />
                  <label className="swatch js-swatch">M</label>
                  <input type="radio" name="size" id="swatch-4" />
                </div>
                <a href="#" className="sizeguide-link">
                  Size Guide
                </a>
              </div>
              <div className="product-swatch color-swatches">
                <label>Color</label>
                <div className="swatch-list">
                  <input type="radio" name="color" id="swatch-11" />
                  <label
                    className="swatch swatch-color js-swatch"
                    style={{ color: "#222" }}
                  />
                  <input type="radio" name="color" id="swatch-12" />
                  <label
                    className="swatch swatch-color js-swatch"
                    style={{ color: "#C93A3E" }}
                  />
                  <input type="radio" name="color" id="swatch-13" />
                  <label
                    className="swatch swatch-color js-swatch"
                    style={{ color: "#E4E4E4" }}
                  />
                </div>
              </div>
            </div>
            <div className="product-single__addtocart">
              <div className="qty-control position-relative qty-initialized">
                <input
                  type="number"
                  name="quantity"
                  defaultValue={1}
                  min={1}
                  style={{ borderRadius: "15px" }}
                  className="qty-control__number text-center"
                />
                <div className="qty-control__reduce">-</div>
                <div className="qty-control__increase">+</div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-addtocart js-open-aside"
                style={{ borderRadius: "15px" }}
              >
                Add to Cart
              </button>
            </div>
          </form>
          <div className="product-single__addtolinks">
            <a href="#" className="menu-link menu-link_us-s add-to-wishlist">
              <FaHeart size={16} />
              <span>Add to Wishlist</span>
            </a>
            <a href="#" className="menu-link menu-link_us-s add-to-compare">
              <FaExchangeAlt size={16} />
              <span>Add to Compare</span>
            </a>
          </div>
          <div className="social-sharing__label d-flex align-items-center">
            <span className="social-sharing__title">Share:</span>
            <div className="social-sharing__list">
              <a href="#" className="social-sharing__link">
                <FaFacebook size={10} />
              </a>
              <a href="#" className="social-sharing__link">
                <FaTwitter size={10} />
              </a>
              <a href="#" className="social-sharing__link">
                <FaInstagram size={10} />
              </a>
              <a href="#" className="social-sharing__link">
                <FaPinterest size={10} />
              </a>
              <a href="#" className="social-sharing__link">
                <FaEnvelope size={10} />
              </a>
            </div>
          </div>
          <div className="product-single__policy">
            <a href="#">
              <FaShippingFast className="me-2 mb-2px" size={12} />
              <span>Shipping policy</span>
            </a>
            <a href="#">
              <FaUndo className="me-2 mb-2px" size={12} />
              <span>Return policy</span>
            </a>
          </div>
        </div>
      </div>
      <div className="product-single__details-tab">
        <ul className="nav nav-tabs" id="myTab1" role="tablist">
          <li
            className="nav-item nav-link nav-link_underscore active"
            role="presentation"
          >
            Description
          </li>
          <li
            className="nav-item nav-link nav-link_underscore"
            role="presentation"
          >
            Additional Information
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade active show"
            id="tab-description"
            role="tabpanel"
            aria-labelledby="tab-description-tab"
          >
            <div className="product-single__description">
              <h3 className="block-title mb-4">
                Sed do eiusmod tempor incididunt ut labore
              </h3>
              <p className="">Lorem ipsum dolor sit amet, consectetur a</p>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="block-title">Why choose product?</h3>
                  <ul className="list text-list">
                    <li>Downloadable/Digital Products, Virtual Products</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h3 className="block-title">Sample Number List</h3>
                  <ol className="list text-list">
                    <li>Create Store-specific attrittbutes on the fly</li>
                  </ol>
                </div>
              </div>
              <h3 className="block-title mb-0">Lining</h3>
              <p>100% Polyester, Main: 100% Polyester.</p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tab-additional-info"
            role="tabpanel"
            aria-labelledby="tab-additional-info-tab"
          >
            <div className="product-single__addtional-info">
              <div className="item">
                <label className="h6">Weight</label>
                <span>1.25 kg</span>
              </div>
              <div className="item">
                <label className="h6">Dimensions</label>
                <span>90 x 60 x 90 cm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;