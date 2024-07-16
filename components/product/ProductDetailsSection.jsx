"use client";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useCartStore from "@/store/cartStore";
import { toast, Toaster } from "react-hot-toast";
import ShareSection from "../global/ShareSection";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const ProductDetailsSection = ({ slice, uid }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  let productId = uid?.uid;

  const { title, description, items, new_price, old_price } = slice;

  const [mainImage, setMainImage] = useState(items[0].image.url);
  const [quantity, setQuantity] = useState(1);
  const [productAttributes, setProductAttributes] = useState({
    size: "XS",
    color: "A",
    carat: "A",
    goldColor: "Yellow",
    caratTone: "Yellow",
    cut: "Excellent",
  });

  const [product, setProduct] = useState();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonColor, setButtonColor] = useState("btn-primary");

  useEffect(() => {
    setProduct({
      id: productId,
      title: title[0].text,
      price: new_price,
      image: mainImage,
      totalPrice: new_price * quantity,
      quantity: quantity,
      ...productAttributes,
    });
  }, []);

  const handleQuantityChange = (e) => {
    const newQuantity =
      e.target.innerText === "+" ? quantity + 1 : Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    setProduct((prev) => ({
      ...prev,
      quantity: newQuantity,
      totalPrice: new_price * newQuantity,
    }));
  };

  const handleAttributeChange = (attribute, value) => {
    setProductAttributes((prev) => ({
      ...prev,
      [attribute]: value,
    }));
    setProduct((prev) => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success("Product added to cart!");
    setButtonText("Added");
    setButtonColor("btn-success");
    setTimeout(() => {
      setButtonText("Add to Cart");
      setButtonColor("btn-primary");
    }, 2000);
  };

  const attributeOptions = {
    size: ["XS", "S", "M", "L"],
    color: ["A", "B", "C", "D"],
    carat: ["A", "B", "C", "D"],
    goldColor: ["Yellow", "White", "Rose Gold"],
    caratTone: ["Yellow", "White", "Rose Gold"],
    cut: ["Excellent"],
  };

  return (
    <section className="product-single container">
      <Toaster />
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
                  {items.map((item, index) => (
                    <SplideSlide key={index}>
                      <div
                        className={`product-single__image-item ${
                          mainImage === item.image.url ? "active" : ""
                        }`}
                        onClick={() => setMainImage(item.image.url)}
                      >
                        <img
                          loading="lazy"
                          className="h-auto"
                          src={item.image.url}
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
              <Link
                href="#"
                className="menu-link menu-link_us-s text-uppercase fw-medium"
              >
                Home
              </Link>
              <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                /
              </span>
              <Link
                href="#"
                className="menu-link menu-link_us-s text-uppercase fw-medium"
              >
                The Shop
              </Link>
            </div>
          </div>
          <h1 className="product-single__name">{title[0].text}</h1>
          <div className="product-single__price">
            <span
              className="old-price"
              style={{
                textDecoration: "line-through",
                color: "black",
              }}
            >
              $ {old_price}
            </span>
            <span className="current-price"> ${new_price}</span>
          </div>
          <div className="product-single__short-desc">
            <PrismicRichText field={description} />
          </div>
          <form name="addtocart-form">
            <div className="product-single__swatches">
              {Object.entries(attributeOptions).map(([attribute, options]) => (
                <div key={attribute} className="product-swatch text-swatches">
                  <label>
                    {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
                  </label>
                  <div className="swatch-list" style={{ borderRadius: "15px" }}>
                    {options.map((option, index) => (
                      <label
                        key={index}
                        className={`swatch js-swatch ${
                          productAttributes[attribute] === option
                            ? "js-swatch-active"
                            : ""
                        }`}
                        onClick={() => handleAttributeChange(attribute, option)}
                      >
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="product-single__addtocart">
              <div className="qty-control position-relative qty-initialized">
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  style={{ borderRadius: "15px" }}
                  className="qty-control__number text-center"
                />
                <div
                  className="qty-control__reduce"
                  onClick={handleQuantityChange}
                >
                  -
                </div>
                <div
                  className="qty-control__increase"
                  onClick={handleQuantityChange}
                >
                  +
                </div>
              </div>
              <button
                type="submit"
                className={`btn ${buttonColor} btn-addtocart js-open-aside`}
                style={{ borderRadius: "15px", transition: "all 0.3s" }}
                onClick={handleAddToCart}
              >
                {buttonText}
              </button>
            </div>
          </form>
          <div className="product-single__addtolinks">
            <ShareSection />
          </div>

          <div className="product-single__meta-info mt-4">
            <div className="meta-item">
              <label>Categories:</label>
              <span>Casual &amp; Urban Wear, Jackets, Men</span>
            </div>
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
                    <li>Create Store-specific attributes on the fly</li>
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
