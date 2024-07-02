"use client";

import { useState } from "react";
import { PiHeartStraightLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const ProductListingSection = () => {
  const [sort, setSort] = useState("Relevance");

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

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <section>
      <div className="container">
        <div className="shop-top-bar d-flex justify-content-between align-items-center">
          {/* <div className="top-bar-left">
            <p>Showing 1–16 of 21 results</p>
          </div> */}
          <div className="top-bar-right flex  align-items-center justify-content-center">
            <span>Sort By: </span>
            <select
              className="nice-select"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="Relevance">Relevance</option>
              <option value="NameAsc">Name (A - Z)</option>
              <option value="NameDesc">Name (Z - A)</option>
              <option value="PriceLowHigh">Price (Low &gt; High)</option>
              <option value="PriceHighLow">Price (High &gt; Low)</option>
            </select>
          </div>{" "}
        </div>
      </div>

      <div className="shop-main-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-product-wrapper">
                <div className="shop-product-wrap grid-view row mbn-30">
                  {products.map((product) => (
                    <div key={product.id} className="col-md-3 col-6 ">
                      <div className="product-item">
                        <figure className="product-thumb">
                          <Link href="/diamond-ring">
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
                          </Link>
                          <div className="product-badge">
                            {product.labelNew && (
                              <div className="product-label new">
                                <span>new</span>
                              </div>
                            )}
                            {/* {product.labelDiscount && (
                              <div className="product-label discount">
                                <span>{product.labelDiscount}</span>
                              </div>
                            )} */}
                          </div>
                          <div className="button-group">
                            {/* <a
                              className="d-flex justify-content-center align-items-center "
                              href="wishlist.html "
                              title="Add to wishlist"
                            >
                              <PiHeartStraightLight />
                            </Link> */}
                            {/* <a
                              className="d-flex justify-content-center align-items-center"
                              href="/slug"
                              title="Add to Compare"
                            >
                              <IoEyeOutline />
                            </Link> */}
                          </div>
                          <div className="cart-hover">
                            <button className="btn btn-cart">
                              add to cart
                            </button>
                          </div>
                        </figure>
                        <div className="product-caption text-center">
                          <div className="product-identity">
                            <p className="manufacturer-name">
                              <Link href="/diamond-ring">
                                {product.manufacturer}
                              </Link>
                            </p>
                          </div>
                          <h6 className="product-name">
                            <Link href="/diamond-ring">{product.name}</Link>
                          </h6>
                          <div className="price-box">
                            <span className="price-regular">
                              {product.price}
                            </span>
                            {product.oldPrice && (
                              <span className="price-old">
                                <del>{product.oldPrice}</del>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="paginatoin-area text-center">
                  <ul className="pagination-box">
                    <li>
                      <Link className="previous" href="#">
                        <IoIosArrowBack />
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="#">1</Link>
                    </li>
                    <li>
                      <Link href="#">2</Link>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link className="next" href="#">
                        <IoIosArrowForward />
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListingSection;
