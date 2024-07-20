"use client";
import { IoClose } from "react-icons/io5";
import useCartStore from "@/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartSideBar = ({
  openCart,
  handleCartVisibility,
  setOpenCart,
  togglePageOverlay,
}) => {
  const cartDetails = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // State to manage quantities
  const [quantity, setQuantity] = useState({});
  const router = useRouter();

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

  const handleCheckout = (e) => {
    e.preventDefault();
    router.push("/checkout");
    setOpenCart(false);
    togglePageOverlay();
  };

  return (
    <>
      <div
        className={`aside aside_right overflow-hidden cart-drawer ${
          openCart ? "aside_visible" : ""
        }`}
        id="cartDrawer"
        style={{ zIndex: 9999 }}
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            SHOPPING BAG ({" "}
            <span className="cart-amount js-cart-items-count">
              {cartDetails?.length}
            </span>{" "}
            )
          </h3>
          <button
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
            onClick={() => {
              setOpenCart(false);
              togglePageOverlay();
            }}
          >
            <IoClose />
          </button>
        </div>

        <div className="aside-content cart-drawer-items-list">
          {cartDetails?.length === 0 && (
            <div className="text-center">
              <p>Your cart is empty</p>
            </div>
          )}
          {cartDetails?.map((product) => (
            <div
              key={product.id}
              className="cart-drawer-item d-flex position-relative mb-3"
            >
              <div className="position-relative">
                <a href="./product1_simple.html">
                  <img
                    loading="lazy"
                    className="cart-drawer-item__img"
                    src={product.image}
                    alt=""
                  />
                </a>
              </div>
              <div className="cart-drawer-item__info flex-grow-1">
                <h6 className="cart-drawer-item__title fw-normal">
                  <a href="./product1_simple.html">{product.title}</a>
                </h6>
                <p className="cart-drawer-item__option text-secondary">
                  Color: {product.color}
                </p>
                <p className="cart-drawer-item__option text-secondary">
                  Size: {product.size}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <div className="qty-control position-relative qty-initialized">
                    <div
                      className="qty-control__reduce text-start"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      -
                    </div>
                    <input
                      className="qty-control__number border-0 text-center"
                      type="number"
                      value={quantity[product.id] || 0}
                      readOnly
                    />
                    <div
                      className="qty-control__increase text-end"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      +
                    </div>
                  </div>

                  <span className="cart-drawer-item__price money price">
                    ${product.price * (quantity[product.id] || 0)}
                  </span>
                </div>
              </div>
              <button
                className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
                onClick={() => removeFromCart(product.id)}
              />
            </div>
          ))}
        </div>
        {cartDetails?.length > 0 && (
          <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
            <hr className="cart-drawer-divider" />
            <div className="d-flex justify-content-between">
              <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
              <span className="cart-subtotal fw-medium">
                $
                {cartDetails.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary mt-3 d-block w-100"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSideBar;
