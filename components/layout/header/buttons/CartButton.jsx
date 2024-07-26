"use client";
import { cartStore } from "@/storage/cartStore";
import { useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";

const CartButton = ({ setIsOpen }) => {
  // ===== INITIALIZING STATES =====
  const { cart, loadCart } = cartStore();

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="header-tools__item header-tools__cart js-open-aside me-0"
    >
      <IoBagOutline />
      <span className="cart-amount d-block position-absolute js-cart-items-count">
        {cart.length}
      </span>
    </button>
  );
};

export default CartButton;
