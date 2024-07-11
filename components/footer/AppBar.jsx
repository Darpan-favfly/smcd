"use client";
import { usePathname } from "next/navigation";
import { CiHome, CiShop, CiChat1, CiDiscount1 } from "react-icons/ci";
import Link from "next/link";
import { NextDataPathnameNormalizer } from "next/dist/server/future/normalizers/request/next-data";

const AppBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <footer className="footer-mobile container w-100 px-3 d-md-none bg-body position-fixed footer-mobile_initialized">
        <div className="row text-center">
          <div className="col-3">
            <Link href="/">
              <div
                className={`footer-mobile__link d-flex flex-column align-items-center ${
                  pathName === "/" ? "active" : ""
                }`}
              >
                <CiHome />
                <span>Home</span>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link href="/shop">
              <div
                className={`footer-mobile__link d-flex flex-column align-items-center ${
                  pathName === "/shop" ? "active" : ""
                }`}
              >
                <CiShop />
                <span>Shop</span>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link href="/">
              <div
                className={`footer-mobile__link d-flex flex-column align-items-center ${
                  pathName === "/offers" ? "active" : ""
                }`}
              >
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
              <div
                className={`footer-mobile__link d-flex flex-column align-items-center ${
                  NextDataPathnameNormalizer === "/connect" ? "active" : ""
                }`}
              >
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

      <style jsx>{`
        .footer-mobile__link.active {
          background-color: #f0f0f0;
          padding: 10px 10px;
          border-radius: 15px;
        }
      `}</style>
    </>
  );
};

export default AppBar;
