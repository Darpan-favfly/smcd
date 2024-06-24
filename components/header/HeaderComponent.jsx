const HeaderComponent = () => {
  return (
    <>
      <MobileHeaderComponent />
      <header
        id="header"
        className="header header_sticky  header-fullwidth position-absolute"
      >
        <div className="container">
          <div className="header-desk header-desk_type_5">
            <div className="logo">
              <a href="./index.html">
                <img
                  src="https://uomo-html.flexkitux.com/images/logo-black.png"
                  alt="Uomo"
                  className="logo__image d-block"
                />
              </a>
            </div>
            {/* /.logo */}
            <form
              action="./"
              method="GET"
              className="header-search search-field d-none d-xxl-flex"
            >
              <button className="btn header-search__btn" type="submit">
                <svg
                  className="d-block"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_search" />
                </svg>
              </button>
              <input
                className="header-search__input w-100"
                type="text"
                name="search-keyword"
                placeholder="Search products..."
              />
              <div className="hover-container position-relative">
                <div className="js-hover__open">
                  <input
                    className="header-search__category search-field__actor border-0 bg-white w-100"
                    type="text"
                    name="search-category"
                    placeholder="All Category"
                    readOnly=""
                  />
                </div>
                <div className="header-search__category-list js-hidden-content mt-2">
                  <ul className="search-suggestion list-unstyled">
                    <li className="search-suggestion__item js-search-select">
                      All Category
                    </li>
                    <li className="search-suggestion__item js-search-select">
                      Men
                    </li>
                    <li className="search-suggestion__item js-search-select">
                      Women
                    </li>
                    <li className="search-suggestion__item js-search-select">
                      Kids
                    </li>
                  </ul>
                </div>
              </div>
            </form>
            {/* /.header-search */}
            <nav className="navigation mx-auto mx-xxl-0">
              <ul className="navigation__list list-unstyled d-flex">
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Pages
                  </a>
                  <ul
                    className="default-menu list-unstyled"
                    style={{ left: 972 }}
                  >
                    <li className="sub-menu__item">
                      <a
                        href="./account_dashboard.html"
                        className="menu-link menu-link_us-s"
                      >
                        My Account
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="./login_register.html"
                        className="menu-link menu-link_us-s"
                      >
                        Login / Register
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="./store_location.html"
                        className="menu-link menu-link_us-s"
                      >
                        Store Locator
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="./lookbook.html"
                        className="menu-link menu-link_us-s"
                      >
                        Lookbook
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="./faq.html" className="menu-link menu-link_us-s">
                        Faq
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="./terms.html"
                        className="menu-link menu-link_us-s"
                      >
                        Terms
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="./404.html" className="menu-link menu-link_us-s">
                        404 Error
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="./coming_soon.html"
                        className="menu-link menu-link_us-s"
                      >
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                  {/* /.box-menu */}
                </li>
                <li className="navigation__item">
                  <a href="./about.html" className="navigation__link">
                    About
                  </a>
                </li>
              </ul>
              {/* /.navigation__list */}
            </nav>
            {/* /.navigation */}
            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container d-block d-xxl-none">
                <div className="js-hover__open position-relative">
                  <a className="js-search-popup search-field__actor" href="#">
                    <svg
                      className="d-block"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_search" />
                    </svg>
                    <i className="btn-icon btn-close-lg" />
                  </a>
                </div>
                <div className="search-popup js-hidden-content">
                  <form
                    action="./search_result.html"
                    method="GET"
                    className="search-field container"
                  >
                    <p className="text-uppercase text-secondary fw-medium mb-4">
                      What are you looking for?
                    </p>
                    <div className="position-relative">
                      <input
                        className="search-field__input search-popup__input w-100 fw-medium"
                        type="text"
                        name="search-keyword"
                        placeholder="Search products"
                      />
                      <button
                        className="btn-icon search-popup__submit"
                        type="submit"
                      >
                        <svg
                          className="d-block"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_search" />
                        </svg>
                      </button>
                      <button
                        className="btn-icon btn-close-lg search-popup__reset"
                        type="reset"
                      />
                    </div>
                    <div className="search-popup__results">
                      <div className="sub-menu search-suggestion">
                        <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a
                              href="./shop2.html"
                              className="menu-link menu-link_us-s"
                            >
                              New Arrivals
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">
                              Dresses
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="./shop3.html"
                              className="menu-link menu-link_us-s"
                            >
                              Accessories
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">
                              Footwear
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">
                              Sweatshirt
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="search-result row row-cols-5" />
                    </div>
                  </form>
                  {/* /.header-search */}
                </div>
                {/* /.search-popup */}
              </div>
              {/* /.header-tools__item hover-container */}
              <div className="header-tools__item hover-container">
                <a
                  className="header-tools__item js-open-aside"
                  href="#"
                  data-aside="customerForms"
                >
                  <svg
                    className="d-block"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_user" />
                  </svg>
                </a>
              </div>
              <a className="header-tools__item" href="./account_wishlist.html">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </a>
              <a
                href="#"
                className="header-tools__item header-tools__cart js-open-aside"
                data-aside="cartDrawer"
              >
                <svg
                  className="d-block"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_cart" />
                </svg>
                <span className="cart-amount d-block position-absolute js-cart-items-count">
                  3
                </span>
              </a>
              <a
                className="header-tools__item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#siteMap"
              >
                <svg
                  className="nav-icon"
                  width={25}
                  height={18}
                  viewBox="0 0 25 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={25} height={2} />
                  <rect y={8} width={20} height={2} />
                  <rect y={16} width={25} height={2} />
                </svg>
              </a>
            </div>
            {/* /.header__tools */}
          </div>
          {/* /.header-desk header-desk_type_1 */}
        </div>
      </header>
    </>
  );
};
const MobileHeaderComponent = () => {
  return (
    <>
      <div
        className="header-mobile header_sticky position-absolute"
        style={{ paddingRight: 0 }}
      >
        <div className="container d-flex align-items-center h-100">
          <a
            className="mobile-nav-activator d-block position-relative"
            href="#"
          >
            <svg
              className="nav-icon"
              width={25}
              height={18}
              viewBox="0 0 25 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_nav" />
            </svg>
            <span className="btn-close-lg position-absolute top-0 start-0 w-100" />
          </a>
          <div className="logo">
            <a href="./index.html">
              <img
                src="https://uomo-html.flexkitux.com/images/logo.png"
                alt="Uomo"
                className="logo__image d-block"
              />
            </a>
          </div>
          {/* /.logo */}
          <a
            href="#"
            className="header-tools__item header-tools__cart js-open-aside"
            data-aside="cartDrawer"
          >
            <svg
              className="d-block"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_cart" />
            </svg>
            <span className="cart-amount d-block position-absolute js-cart-items-count">
              3
            </span>
          </a>
        </div>
        {/* /.container */}
        <nav
          className="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto"
          style={{ paddingRight: 0 }}
        >
          <div className="container">
            <form
              action="search.html"
              method="GET"
              className="search-field position-relative mt-4 mb-3"
            >
              <div className="position-relative">
                <input
                  className="search-field__input w-100 border rounded-1"
                  type="text"
                  name="search-keyword"
                  placeholder="Search products"
                />
                <button
                  className="btn-icon search-popup__submit pb-0 me-2"
                  type="submit"
                >
                  <svg
                    className="d-block"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_search" />
                  </svg>
                </button>
                <button
                  className="btn-icon btn-close-lg search-popup__reset pb-0 me-2"
                  type="reset"
                />
              </div>
              <div className="position-absolute start-0 top-100 m-0 w-100">
                <div className="search-result" />
              </div>
            </form>
            {/* /.header-search */}
          </div>
          {/* /.container */}
          <div className="container">
            <div className="overflow-hidden">
              <ul className="navigation__list list-unstyled position-relative">
                <li className="navigation__item">
                  <a href="./about.html" className="navigation__link">
                    About
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="./contact.html" className="navigation__link">
                    Contact
                  </a>
                </li>
              </ul>
              {/* /.navigation__list */}
            </div>
            {/* /.overflow-hidden */}
          </div>
        </nav>
        {/* /.navigation */}
      </div>
    </>
  );
};
export default HeaderComponent;
