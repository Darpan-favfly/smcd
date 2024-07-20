"use client";

import { useState } from "react";

const CheckoutSection = () => {
  const [isCartDetailsVisible, setIsCartDetailsVisible] = useState(true);

  const [
    isShippingAndBillingDetailsVisible,
    setIsShippingAndBillingDetailsVisible,
  ] = useState(false);

  const [isOrderCompleteVisible, setIsOrderCompleteVisible] = useState(false);

  const handleVisibleSection = (section) => {
    switch (section) {
      case "shippingAndBillingDetails":
        setIsCartDetailsVisible(false);
        setIsShippingAndBillingDetailsVisible(true);
        setIsOrderCompleteVisible(false);
        break;
      case "orderComplete":
        setIsCartDetailsVisible(false);
        setIsShippingAndBillingDetailsVisible(false);
        setIsOrderCompleteVisible(true);
        break;
      default:
        setIsCartDetailsVisible(true);
        setIsShippingAndBillingDetailsVisible(false);
        setIsOrderCompleteVisible(false);
    }
  };

  return (
    <>
      <section className="shop-checkout container">
        <h2 className="page-title">Cart Details</h2>
        <CheckoutHeaderSection
          handleVisibleSection={handleVisibleSection}
          isShippingAndBillingDetailsVisible={
            isShippingAndBillingDetailsVisible
          }
        />
        {isCartDetailsVisible && (
          <CartDetailsSection handleVisibleSection={handleVisibleSection} />
        )}
        {isShippingAndBillingDetailsVisible && (
          <ShippingAndBillingDetailsSection />
        )}
        {isOrderCompleteVisible && <OrderCompleteSection />}
      </section>
    </>
  );
};
const CheckoutHeaderSection = ({
  handleVisibleSection,
  isShippingAndBillingDetailsVisible,
}) => {
  return (
    <>
      <div className="checkout-steps">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => handleVisibleSection("cartDetails")}
          className="checkout-steps__item active"
        >
          <span className="checkout-steps__item-number">01</span>
          <span className="checkout-steps__item-title">
            <span>Shopping Bag</span>
            <em>Manage Your Items List</em>
          </span>
        </a>
        <a
          className={`checkout-steps__item ${
            isShippingAndBillingDetailsVisible ? "active" : ""
          }`}
        >
          <span className="checkout-steps__item-number">02</span>
          <span className="checkout-steps__item-title">
            <span>Shipping and Checkout</span>
            <em>Checkout Your Items List</em>
          </span>
        </a>
        <a
          onClick={() => {
            handleVisibleSection("orderComplete");
          }}
          className="checkout-steps__item"
        >
          <span className="checkout-steps__item-number">03</span>
          <span className="checkout-steps__item-title">
            <span>Confirmation</span>
            <em>Review And Submit Your Order</em>
          </span>
        </a>
      </div>
    </>
  );
};

const CartDetailsSection = ({ handleVisibleSection }) => {
  return (
    <>
      <div className="shopping-cart">
        <div className="cart-table__wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th />
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="shopping-cart__product-item">
                    <a href="./product1_simple.html">
                      <img
                        loading="lazy"
                        src="../images/cart-item-3.jpg"
                        width={120}
                        height={120}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="shopping-cart__product-item__detail">
                    <h4>
                      <a href="./product1_simple.html">Cobleknit Shawl</a>
                    </h4>
                    <ul className="shopping-cart__product-item__options">
                      <li>Color: Yellow</li>
                      <li>Size: L</li>
                    </ul>
                  </div>
                </td>
                <td>
                  <span className="shopping-cart__product-price">$99</span>
                </td>
                <td>
                  <div className="qty-control position-relative qty-initialized">
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={3}
                      min={1}
                      className="qty-control__number text-center"
                    />
                    <div className="qty-control__reduce">-</div>
                    <div className="qty-control__increase">+</div>
                  </div>
                  {/* .qty-control */}
                </td>
                <td>
                  <span className="shopping-cart__subtotal">$297</span>
                </td>
                <td>
                  <a href="#" className="remove-cart">
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      fill="#767676"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" />
                      <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-table-footer">
            <form action="./" className="position-relative bg-body">
              <input
                className="form-control"
                type="text"
                name="coupon_code"
                placeholder="Coupon Code"
              />
              <input
                className="btn-link fw-medium position-absolute top-0 end-0 h-100 px-4"
                type="submit"
                defaultValue="APPLY COUPON"
              />
            </form>
            <button className="btn btn-light">UPDATE CART</button>
          </div>
        </div>
        <div className="shopping-cart__totals-wrapper">
          <div className="sticky-content">
            <div className="shopping-cart__totals">
              <h3>Cart Totals</h3>
              <table className="cart-totals">
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>$1300</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          type="checkbox"
                          defaultValue=""
                          id="free_shipping"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="free_shipping"
                        >
                          Free shipping
                        </label>
                      </div>
                      <div>Shipping to AL.</div>
                      <div>
                        <a href="#" className="menu-link menu-link_us-s">
                          CHANGE ADDRESS
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>$1319</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mobile_fixed-btn_wrapper">
              <div className="button-wrapper container">
                <button
                  className="btn btn-primary btn-checkout"
                  onClick={() => {
                    handleVisibleSection("shippingAndBillingDetails");
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ShippingAndBillingDetailsSection = () => {
  return (
    <>
      <form name="checkout-form" action="./shop_order_complete.html">
        <div className="checkout-form">
          <div className="billing-info__wrapper">
            <h4>BILLING DETAILS</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_first_name"
                    placeholder="First Name"
                  />
                  <label htmlFor="checkout_first_name">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_last_name"
                    placeholder="Last Name"
                  />
                  <label htmlFor="checkout_last_name">Last Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_company_name"
                    placeholder="Company Name (optional)"
                  />
                  <label htmlFor="checkout_company_name">
                    Company Name (optional)
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="search-field my-3">
                  <div className="form-label-fixed hover-container">
                    <label htmlFor="search-dropdown" className="form-label">
                      Country / Region*
                    </label>
                    <div className="js-hover__open">
                      <input
                        type="text"
                        className="form-control form-control-lg search-field__actor search-field__arrow-down"
                        id="search-dropdown"
                        name="search-keyword"
                        readOnly=""
                        placeholder="Choose a location..."
                      />
                    </div>
                    <div className="filters-container js-hidden-content mt-2">
                      <div className="search-field__input-wrapper">
                        <input
                          type="text"
                          className="search-field__input form-control form-control-sm bg-lighter border-lighter"
                          placeholder="Search"
                        />
                      </div>
                      <ul className="search-suggestion list-unstyled">
                        <li className="search-suggestion__item js-search-select">
                          Australia
                        </li>
                        <li className="search-suggestion__item js-search-select">
                          Canada
                        </li>
                        <li className="search-suggestion__item js-search-select">
                          United Kingdom
                        </li>
                        <li className="search-suggestion__item js-search-select">
                          United States
                        </li>
                        <li className="search-suggestion__item js-search-select">
                          Turkey
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mt-3 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_street_address"
                    placeholder="Street Address *"
                  />
                  <label htmlFor="checkout_company_name">
                    Street Address *
                  </label>
                </div>
                <div className="form-floating mt-3 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_street_address_2"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_city"
                    placeholder="Town / City *"
                  />
                  <label htmlFor="checkout_city">Town / City *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_zipcode"
                    placeholder="Postcode / ZIP *"
                  />
                  <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_province"
                    placeholder="Province *"
                  />
                  <label htmlFor="checkout_province">Province *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_phone"
                    placeholder="Phone *"
                  />
                  <label htmlFor="checkout_phone">Phone *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="checkout_email"
                    placeholder="Your Mail *"
                  />
                  <label htmlFor="checkout_email">Your Mail *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-check mt-3">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                    defaultValue=""
                    id="create_account"
                  />
                  <label className="form-check-label" htmlFor="create_account">
                    CREATE AN ACCOUNT?
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                    defaultValue=""
                    id="ship_different_address"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ship_different_address"
                  >
                    SHIP TO A DIFFERENT ADDRESS?
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mt-3">
                <textarea
                  className="form-control form-control_gray"
                  placeholder="Order Notes (optional)"
                  cols={30}
                  rows={8}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="checkout__totals-wrapper">
            <div className="sticky-content">
              <div className="checkout__totals">
                <h3>Your Order</h3>
                <table className="checkout-cart-items">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Zessi Dresses x 2</td>
                      <td>$32.50</td>
                    </tr>
                    <tr>
                      <td>Kirby T-Shirt</td>
                      <td>$29.90</td>
                    </tr>
                  </tbody>
                </table>
                <table className="checkout-totals">
                  <tbody>
                    <tr>
                      <th>SUBTOTAL</th>
                      <td>$62.40</td>
                    </tr>
                    <tr>
                      <th>SHIPPING</th>
                      <td>Free shipping</td>
                    </tr>
                    <tr>
                      <th>VAT</th>
                      <td>$19</td>
                    </tr>
                    <tr>
                      <th>TOTAL</th>
                      <td>$81.40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="checkout__payment-methods">
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    name="checkout_payment_method"
                    id="checkout_payment_method_1"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkout_payment_method_1"
                  >
                    Direct bank transfer
                    <span className="option-detail d-block">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.Your order will
                      not be shipped until the funds have cleared in our
                      account.
                    </span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    name="checkout_payment_method"
                    id="checkout_payment_method_3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkout_payment_method_3"
                  >
                    Cash on delivery
                    <span className="option-detail d-block">
                      Phasellus sed volutpat orci. Fusce eget lore mauris
                      vehicula elementum gravida nec dui. Aenean aliquam varius
                      ipsum, non ultricies tellus sodales eu. Donec dignissim
                      viverra nunc, ut aliquet magna posuere eget.
                    </span>
                  </label>
                </div>
                <div className="policy-text">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <a href="./terms.html" target="_blank">
                    privacy policy
                  </a>
                  .
                </div>
              </div>
              <button className="btn btn-primary btn-checkout">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const OrderCompleteSection = () => {
  return (
    <>
      <div className="order-complete">
        <div className="order-complete__message">
          <svg
            width={80}
            height={80}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={40} cy={40} r={40} fill="#B9A16B" />
            <path
              d="M52.9743 35.7612C52.9743 35.3426 52.8069 34.9241 52.5056 34.6228L50.2288 32.346C49.9275 32.0446 49.5089 31.8772 49.0904 31.8772C48.6719 31.8772 48.2533 32.0446 47.952 32.346L36.9699 43.3449L32.048 38.4062C31.7467 38.1049 31.3281 37.9375 30.9096 37.9375C30.4911 37.9375 30.0725 38.1049 29.7712 38.4062L27.4944 40.683C27.1931 40.9844 27.0257 41.4029 27.0257 41.8214C27.0257 42.24 27.1931 42.6585 27.4944 42.9598L33.5547 49.0201L35.8315 51.2969C36.1328 51.5982 36.5513 51.7656 36.9699 51.7656C37.3884 51.7656 37.8069 51.5982 38.1083 51.2969L40.385 49.0201L52.5056 36.8996C52.8069 36.5982 52.9743 36.1797 52.9743 35.7612Z"
              fill="white"
            />
          </svg>
          <h3>Your order is completed!</h3>
          <p>Thank you. Your order has been received.</p>
        </div>
        <div className="order-info">
          <div className="order-info__item">
            <label>Order Number</label>
            <span>13119</span>
          </div>
          <div className="order-info__item">
            <label>Date</label>
            <span>27/10/2023</span>
          </div>
          <div className="order-info__item">
            <label>Total</label>
            <span>$81.40</span>
          </div>
          <div className="order-info__item">
            <label>Paymetn Method</label>
            <span>Direct Bank Transfer</span>
          </div>
        </div>
        <div className="checkout__totals-wrapper">
          <div className="checkout__totals">
            <h3>Order Details</h3>
            <table className="checkout-cart-items">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zessi Dresses x 2</td>
                  <td>$32.50</td>
                </tr>
                <tr>
                  <td>Kirby T-Shirt</td>
                  <td>$29.90</td>
                </tr>
              </tbody>
            </table>
            <table className="checkout-totals">
              <tbody>
                <tr>
                  <th>SUBTOTAL</th>
                  <td>$62.40</td>
                </tr>
                <tr>
                  <th>SHIPPING</th>
                  <td>Free shipping</td>
                </tr>
                <tr>
                  <th>VAT</th>
                  <td>$19</td>
                </tr>
                <tr>
                  <th>TOTAL</th>
                  <td>$81.40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutSection;
