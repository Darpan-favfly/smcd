import { CiHome, CiShop, CiChat1, CiDiscount1 } from "react-icons/ci";
import Link from "next/link";

const AppBar = () => {
  return (
    <>
      <footer className="footer-mobile container w-100 px-3 d-md-none bg-body position-fixed footer-mobile_initialized">
        <div className="row text-center">
          <div className="col-3">
            <Link href="/">
              <div className="footer-mobile__link d-flex flex-column align-items-center">
                <CiHome />
                <span>Home</span>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link href="/collection">
              <div className="footer-mobile__link d-flex flex-column align-items-center">
                <CiShop />
                <span>Shop</span>
              </div>
            </Link>
          </div>{" "}
          <div className="col-3">
            <Link href="/">
              <div className="footer-mobile__link d-flex flex-column align-items-center">
                <div className="position-relative">
                  <CiDiscount1 />
                  {/* <span className="wishlist-amount d-block position-absolute js-wishlist-count"></span> */}
                </div>
                <span>Offers</span>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link href="/">
              <div className="footer-mobile__link d-flex flex-column align-items-center">
                <div className="position-relative">
                  <CiChat1 />
                  <span className="wishlist-amount d-block position-absolute js-wishlist-count"></span>
                </div>
                <span>Connect</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppBar;
