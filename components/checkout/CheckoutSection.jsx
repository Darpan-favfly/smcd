"use client";

import useCartStore from "@/store/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";

const CheckoutSection = () => {
  const [isCartDetailsVisible, setIsCartDetailsVisible] = useState(true);

  const [
    isShippingAndBillingDetailsVisible,
    setIsShippingAndBillingDetailsVisible,
  ] = useState(false);

  const [isOrderCompleteVisible, setIsOrderCompleteVisible] = useState(false);

  const [formData, setFormData] = useState({
    billingDetails: {
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      city: "",
      zipcode: "",
      province: "",
      phone: "",
      email: "",
      createAccount: false,
      shipDifferentAddress: false,
      orderNotes: "",
      paymentMethod: "",
    },
    shippingDetails: {
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      city: "",
      zipcode: "",
      province: "",
      phone: "",
      email: "",
      createAccount: false,
      shipDifferentAddress: false,
      orderNotes: "",
      paymentMethod: "",
    },
  });

  const cartDetails = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

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
  // State to manage quantities
  const [quantity, setQuantity] = useState({});

  // Load quantities initially from cart
  useEffect(() => {
    const initialQuantities = {};
    cartDetails.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantity(initialQuantities);
  }, [cartDetails]);

  const incrementQuantity = (id) => {
    const newQuantity = { ...quantity };
    newQuantity[id] = newQuantity[id] ? newQuantity[id] + 1 : 1;
    setQuantity(newQuantity);
    updateQuantity(id, newQuantity[id]);
  };

  const decrementQuantity = (id) => {
    if (quantity[id] === 1) {
      removeFromCart(id);
      return;
    }
    const newQuantity = { ...quantity };
    newQuantity[id] = newQuantity[id] - 1;
    setQuantity(newQuantity);
    updateQuantity(id, newQuantity[id]);
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
          <CartDetailsSection
            handleVisibleSection={handleVisibleSection}
            cartDetails={cartDetails}
            removeFromCart={removeFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            quantity={quantity}
          />
        )}

        {isShippingAndBillingDetailsVisible && (
          <ShippingAndBillingDetailsSection
            formData={formData}
            setFormData={setFormData}
          />
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

const CartDetailsSection = ({
  handleVisibleSection,
  cartDetails,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  quantity,
}) => {
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
              {cartDetails.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="shopping-cart__product-item">
                      <Link href={product.id}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="shopping-cart__product-item__image"
                        />
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="shopping-cart__product-item__detail">
                      <h4>
                        <Link href={product.id}>{product.title}</Link>
                      </h4>
                      <ul className="shopping-cart__product-item__options">
                        <li>Color: {product.color}</li>
                        <li>Size: {product.size}</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <span className="shopping-cart__product-price">
                      ${product.price}
                    </span>
                  </td>
                  <td>
                    <div className="qty-control position-relative qty-initialized">
                      <input
                        type="number"
                        name="quantity"
                        value={quantity[product.id] || 0}
                        min={1}
                        className="qty-control__number text-center"
                        readOnly
                      />
                      <div
                        className="qty-control__reduce"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        -
                      </div>
                      <div
                        className="qty-control__increase"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        +
                      </div>
                    </div>
                    {/* .qty-control */}
                  </td>
                  <td>
                    <span className="shopping-cart__subtotal">
                      ${product.price * (quantity[product.id] || 0)}
                    </span>
                  </td>
                  <td>
                    <a
                      onClick={() => removeFromCart(product.id)}
                      className="remove-cart"
                    >
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
              ))}
            </tbody>
          </table>
          {/* <div className="cart-table-footer">
            <form className="position-relative bg-body">
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
          </div> */}
        </div>
        <div className="shopping-cart__totals-wrapper">
          <div className="sticky-content">
            <div className="shopping-cart__totals">
              <h3>Cart Totals</h3>
              <table className="cart-totals">
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>
                      $
                      {cartDetails.reduce((acc, item) => {
                        return acc + item.price * (quantity[item.id] || 0);
                      }, 0)}
                    </td>
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

const ShippingAndBillingDetailsSection = ({ formData, setFormData }) => {
  const formFields = [
    {
      label: "First Name",
      type: "text",
      name: "firstName",
      placeholder: "First Name",
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
    },

    {
      label: "Country",
      type: "text",
      name: "country",
      placeholder: "Country",
    },
    {
      label: "Street Address",
      type: "text",
      name: "streetAddress",
      placeholder: "Street Address",
    },

    {
      label: "City",
      type: "text",
      name: "city",
      placeholder: "City",
    },
    {
      label: "Zipcode",
      type: "text",
      name: "zipcode",
      placeholder: "Zipcode",
    },
    {
      label: "landmark",
      type: "text",
      name: "landmark",
      placeholder: "landmark",
    },
    {
      label: "Province",
      type: "text",
      name: "province",
      placeholder: "Province",
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      placeholder: "Phone",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
    },
  ];

  const handleChangeBillingDetails = (e) => {
    setFormData({
      ...formData,
      billingDetails: {
        ...formData.billingDetails,
        [e.target.name]: e.target.value,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <button onClick={handleSubmit}>hel</button>
      <form name="checkout-form" action="./shop_order_complete.html">
        <div className="checkout-form">
          <div className="billing-info__wrapper">
            <h4>BILLING DETAILS</h4>
            <form>
              <div className="row">
                {formFields.map((field) => (
                  <div className="col-lg-6">
                    <div className="form-floating my-3">
                      <input
                        type={field.type}
                        className="form-control"
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChangeBillingDetails}
                        required
                      />
                      <label htmlFor="checkout_first_name">{field.label}</label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-3">
                    <textarea
                      className="form-control form-control_gray"
                      placeholder="Order Notes (optional)"
                      cols={30}
                      rows={8}
                      value={formData.orderNotes}
                      name="orderNotes"
                      onChange={handleChangeBillingDetails}
                    />
                  </div>
                </div>
              </div>
              <div className="form-check mb-3 mt-4">
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
            </form>
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
