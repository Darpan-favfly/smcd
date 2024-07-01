"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { PiHeartStraightLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

const RecommendedProductsSection = () => {
  const products = [
    {
      id: 1,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-6.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-13.jpg",
      labelNew: true,
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    // Add more product objects here
    {
      id: 2,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-7.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-14.jpg",
      labelNew: true,
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 3,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-8.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-15.jpg",
      labelNew: true,
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 4,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-9.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-16.jpg",
      labelNew: true,
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 5,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-10.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-17.jpg",
      labelNew: true,
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 6,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-11.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-18.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 7,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-12.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-18.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 8,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-13.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-10.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 9,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-14.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-12.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 10,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-15.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-18.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 11,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-16.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-15.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
    {
      id: 12,
      primaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-17.jpg",
      secondaryImage:
        "https://htmldemo.net/corano/corano/assets/img/product/product-16.jpg",
      labelNew: true,
      labelDiscount: "10%",
      labelDiscount: "10%",
      manufacturer: "Gold",
      name: "Diamond Exclusive Ornament",
      price: "$60.00",
      oldPrice: "$70.00",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="recommended-products-section">
          <h2>Recommended Products</h2>
          <Splide
            options={{
              height: "500px",
              wheel: true,
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
                480: {
                  perPage: 1,
                },
              },
            }}
          >
            {products.map((product) => (
              <SplideSlide key={product.id}>
                <div className="product-item">
                  <figure className="product-thumb">
                    <a href="product-details.html">
                      <img
                        className="pri-img"
                        src={product.primaryImage}
                        alt="product"
                        style={{ borderRadius: "15px" }}
                      />
                      <img
                        className="sec-img"
                        src={product.secondaryImage}
                        alt="product"
                      />
                    </a>
                    <div className="product-badge">
                      {product.labelNew && (
                        <div className="product-label new">
                          <span>new</span>
                        </div>
                      )}
                    </div>
                    <div className="button-group">
                      <a
                        className="d-flex justify-content-center align-items-center"
                        href="wishlist.html"
                        title="Add to wishlist"
                      >
                        <PiHeartStraightLight />
                      </a>
                      <a
                        className="d-flex justify-content-center align-items-center"
                        href="compare.html"
                        title="Add to Compare"
                      >
                        <IoEyeOutline />
                      </a>
                    </div>
                    <div className="cart-hover">
                      <button className="btn btn-cart">add to cart</button>
                    </div>
                  </figure>
                  <div className="product-caption text-center">
                    <div className="product-identity">
                      <p className="manufacturer-name">
                        <a href="product-details.html">
                          {product.manufacturer}
                        </a>
                      </p>
                    </div>
                    <h6 className="product-name">
                      <a href="product-details.html">{product.name}</a>
                    </h6>
                    <div className="price-box">
                      <span className="price-regular">{product.price}</span>
                      {product.oldPrice && (
                        <span className="price-old">
                          <del>{product.oldPrice}</del>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProductsSection;