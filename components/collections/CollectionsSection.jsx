import Link from "next/link";
import HeadingComponent from "../heading/HeadingComponent";

const CollectionsSection = () => {
  const data = [
    {
      image:
        "https://jewelbox.co.in/wp-content/themes/jewelbox_v2/images/collction-1.jpg",
      subHeading: "Engagement Rings",
      link: "/collections/engagement-rings",
    },
    {
      image:
        "https://jewelbox.co.in/wp-content/themes/jewelbox_v2/images/Solitare.jpg",
      subHeading: "Pendent Sets",
      link: "/collections/pendent-sets",
    },
    {
      image:
        "https://jewelbox.co.in/wp-content/themes/jewelbox_v2/images/under_20k.jpg",
      subHeading: "Gifts Under 20k",
      link: "/collections/gifts-under-20k",
    },
    {
      image:
        "https://jewelbox.co.in/wp-content/themes/jewelbox_v2/images/gift.jpg",
      subHeading: "Personalised Gifts",
      link: "/collections/personalised-gifts",
    },
  ];
  //   {
  //     image: "https://uomo-html.flexkitux.com/images/collection_grid_1.jpg",
  //     subHeading: "Hot List",
  //     heading: " Women Collection",
  //     link: "./shop1.html",
  //   },
  //   {
  //     image: "https://uomo-html.flexkitux.com/images/collection_grid_2.jpg",
  //     subHeading: "Hot List",
  //     heading: "Men Collection",
  //     link: "./shop1.html",
  //   },
  //   {
  //     image: "https://uomo-html.flexkitux.com/images/collection_grid_3.jpg",
  //     subHeading: "Hot List",
  //     heading: "Kids Collection",
  //     link: "./shop1.html",
  //   },
  //   {
  //     image: "https://uomo-html.flexkitux.com/images/collection_grid_4.jpg",
  //     subHeading: "Hot List",
  //     heading: "Hip Hop Collection",
  //     link: "./shop1.html",
  //   },
  // ];
  return (
    <>
      <section className="shop-collction">
        <HeadingComponent
          data={{
            heading: "Shop By Collection",
            description: "Explore Now!",
          }}
        />

        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <Link href={item.link} className="image-wrap">
                  <img src={item.image} />
                  <h5>
                    <span className="btn-link btn-link_md default-underline text-uppercase fw-medium">
                      {item.subHeading}
                    </span>
                  </h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsSection;
