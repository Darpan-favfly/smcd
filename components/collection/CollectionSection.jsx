import HeadingComponent from "../heading/HeadingComponent";

const CollectionSection = () => {
  const data = [
    {
      image: "https://uomo-html.flexkitux.com/images/collection_grid_1.jpg",
      subHeading: "Hot List",
      heading: " Women Collection",
      link: "./shop1.html",
    },
    {
      image: "https://uomo-html.flexkitux.com/images/collection_grid_2.jpg",
      subHeading: "Hot List",
      heading: "Men Collection",
      link: "./shop1.html",
    },
    {
      image: "https://uomo-html.flexkitux.com/images/collection_grid_3.jpg",
      subHeading: "Hot List",
      heading: "Kids Collection",
      link: "./shop1.html",
    },
    {
      image: "https://uomo-html.flexkitux.com/images/collection_grid_4.jpg",
      subHeading: "Hot List",
      heading: "Hip Hop Collection",
      link: "./shop1.html",
    },
  ];
  return (
    <>
      <section
        className="collections-grid collections-grid_masonry"
        id="section-collections-grid_masonry"
      >
        <HeadingComponent
          data={{
            heading: "Shop By Collection",
            description:
              "Shop from our wide range of collections and find the perfect piece for you.",
          }}
        />
        <div className="container h-md-100">
          <div className="row h-md-100">
            <div className="col-lg-6 h-md-100">
              <div className="collection-grid__item position-relative h-md-100">
                <div
                  className="background-img"
                  style={{
                    borderRadius: "10px",
                    backgroundImage:
                      'url("https://uomo-html.flexkitux.com/images/collection_grid_1.jpg")',
                  }}
                />
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <h3 className="text-uppercase ">
                    <strong>Women</strong> Collection
                  </h3>
                  <a
                    href="./shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </a>
                </div>
                {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
              </div>
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-6 d-flex flex-column">
              <div className="collection-grid__item position-relative flex-grow-1 mb-lg-4">
                <div
                  className="background-img"
                  style={{
                    borderRadius: "10px",
                    backgroundImage:
                      'url("https://uomo-html.flexkitux.com/images/collection_grid_2.jpg")',
                  }}
                />
                <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                  <h3 className="text-uppercase">
                    <strong>Men</strong> Collection
                  </h3>
                  <a
                    href="./shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
                  >
                    Shop Now
                  </a>
                </div>
                {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
              </div>
              <div className="position-relative flex-grow-1 mt-lg-1">
                <div className="row h-md-100">
                  <div className="col-md-6 h-md-100">
                    <div className="collection-grid__item h-md-100 position-relative">
                      <div
                        className="background-img"
                        style={{
                          borderRadius: "10px",
                          backgroundImage:
                            'url("https://uomo-html.flexkitux.com/images/collection_grid_3.jpg")',
                        }}
                      />
                      <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                        <h3 className="text-uppercase">
                          <strong>Kids</strong> Collection
                        </h3>
                        <a
                          href="./shop1.html"
                          className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
                        >
                          Shop Now
                        </a>
                      </div>
                      {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>
                  <div className="col-md-6 h-md-100">
                    <div className="collection-grid__item h-md-100 position-relative">
                      <div
                        className="background-img"
                        style={{
                          backgroundColor: "#f5e6e0",
                          borderRadius: "10px",
                        }}
                      />
                      <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                        <h3 className="text-uppercase">
                          <strong>Hip Hop</strong> Collection
                        </h3>

                        <a
                          href="./shop1.html"
                          className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
                        >
                          Shop Now
                        </a>
                      </div>
                      {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </>
  );
};

export default CollectionSection;
