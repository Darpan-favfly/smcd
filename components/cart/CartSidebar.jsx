import { IoClose } from "react-icons/io5";

const CartSideBar = ({
  openCart,
  handleCartVisibility,
  setOpenCart,
  togglePageOverlay,
}) => {
  return (
    <>
      <div
        className={`aside aside_right overflow-hidden cart-drawer ${openCart ? "aside_visible" : ""}`}
        id="cartDrawer"
        style={{ zIndex: 9999 }}
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            SHOPPING BAG ({" "}
            <span className="cart-amount js-cart-items-count">1</span> ){" "}
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
          <div className="cart-drawer-item d-flex position-relative">
            <div className="position-relative">
              <a href="./product1_simple.html">
                <img
                  loading="lazy"
                  className="cart-drawer-item__img"
                  src="https://images.prismic.io/smcjewels/Zo4p2x5LeNNTw-X3_product-details-img4.webp?auto=format%2Ccompress&rect=0%2C14%2C600%2C571&w=1080&h=1028"
                  alt=""
                />
              </a>
            </div>
            <div className="cart-drawer-item__info flex-grow-1">
              <h6 className="cart-drawer-item__title fw-normal">
                <a href="./product1_simple.html">Cableknit Shawl</a>
              </h6>
              <p className="cart-drawer-item__option text-secondary">
                Color: Green
              </p>
              <p className="cart-drawer-item__option text-secondary">Size: L</p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <div className="qty-control position-relative qty-initialized">
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={3}
                    min={1}
                    className="qty-control__number border-0 text-center"
                  />
                  <div className="qty-control__reduce text-start">-</div>
                  <div className="qty-control__increase text-end">+</div>
                </div>

                <span className="cart-drawer-item__price money price">
                  $129
                </span>
              </div>
            </div>
            <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
          </div>
        </div>

        <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
          <hr className="cart-drawer-divider" />
          <div className="d-flex justify-content-between">
            <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
            <span className="cart-subtotal fw-medium">$176.00</span>
          </div>
          {/* <a href="/" className="btn btn-light mt-3 d-block">
            View Cart
          </a> */}
          <a
            href="./shop_checkout.html"
            className="btn btn-primary mt-3 d-block"
          >
            Checkout
          </a>
        </div>
      </div>
    </>
  );
};

export default CartSideBar;
