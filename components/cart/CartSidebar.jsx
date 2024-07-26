"use client";
import Link from "next/link";
import SliderComponent from "../ui/slider/SliderComponent";
import { cartStore } from "@/storage/cartStore";
import { cad } from "@/lib/converter/priceConverter";
import { BsCart2 } from "react-icons/bs";
import { useRouter } from "next/navigation";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  // ===== INITIALIZING STORES =====
  const { cart } = cartStore();

  // ===== INITIALIZING ROUTER =====
  const router = useRouter();

  return (
    <SliderComponent
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`SHOPPING BAG (${cart.length})`}
    >
      <div
        style={{
          height: "calc(100vh - 120px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* // ===== CART ITEMS ===== */}
        <div className="cart-drawer-items-list">
          {cart.length === 0 ? (
            <div
              className="text-center text-secondary h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                fontSize: "1.2rem",
              }}
            >
              <span
                style={{
                  opacity: 0.5,
                  marginBottom: "10px",
                }}
              >
                <BsCart2 size={60} />
              </span>
              Your cart is empty
            </div>
          ) : (
            cart.map((item, index) => (
              <CartItem key={index} data={item} index={index} />
            ))
          )}
        </div>

        <button
          onClick={() => {
            router.push("/checkout");
            setIsOpen(false);
          }}
          className="btn btn-primary mt-3 d-block"
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </SliderComponent>
  );
};

const CartItem = ({ data, index }) => {
  const { title, uid, price, image, additionalDetails } = data;

  const url = `/${uid}`;

  // ===== INITIALIZING STORES =====
  const { removeCartItem } = cartStore();

  return (
    <>
      <div className="cart-drawer-item d-flex position-relative">
        <div className="position-relative">
          <Link href={url}>
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src={image}
              alt
            />
          </Link>
        </div>
        <div className="cart-drawer-item__info flex-grow-1">
          <h6 className="cart-drawer-item__title fw-normal">
            <Link href={url}>{title}</Link>
          </h6>
          <div className="row mt-3">
            {Object.keys(additionalDetails).map((key) => (
              <p
                key={key}
                className="col-6 cart-drawer-item__option text-secondary"
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
                  .trim()}
                : {additionalDetails[key]}
              </p>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-between mt-1">
            <span className="cart-drawer-item__price money price">
              {cad(price)}
            </span>
          </div>
        </div>

        {/* // ===== REMOVE BUTTON ===== */}
        <button
          className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
          onClick={() => removeCartItem(index)}
        />
      </div>

      <hr className="cart-drawer-divider" />

      <style jsx>{`
        .cart-drawer-item__option {
          font-size: 11px;
        }
      `}</style>
    </>
  );
};

export default CartSidebar;
