import { CiHome } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

const AppBar = () => {
  return (
    <>
      <footer className="footer-mobile container w-100 px-5 d-md-none bg-body position-fixed footer-mobile_initialized">
        <div className="row text-center">
          <div className="col-4">
            <a
              href="/"
              className="footer-mobile__link d-flex flex-column align-items-center"
            >
              <CiHome />

              <span>Home</span>
            </a>
          </div>
          {/* /.col-3 */}
          <div className="col-4">
            <a
              href="/"
              className="footer-mobile__link d-flex flex-column align-items-center"
            >
              <CiShop />
              <span>Shop</span>
            </a>
          </div>
          {/* /.col-3 */}
          <div className="col-4">
            <a
              href="/"
              className="footer-mobile__link d-flex flex-column align-items-center"
            >
              <div className="position-relative">
                <CiGrid41 />
                {/* <span className="wishlist-amount d-block position-absolute js-wishlist-count">
                  New
                </span> */}
              </div>
              <span>Collection</span>
            </a>
          </div>
          {/* /.col-3 */}
        </div>
        {/* /.row */}
      </footer>
    </>
  );
};

export default AppBar;
