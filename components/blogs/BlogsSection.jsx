import HeadingComponent from "../heading/HeadingComponent";
import Link from "next/link";

const BlogsSection = () => {
  const data = [
    {
      image: "https://uomo-html.flexkitux.com/images/blog/blog-5.jpg",
      subHeading: "By Admin",
      published_date: "April 05, 2023",
      title: "Woman with good shoes is never be ugly place",
      description:
        "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
      link: "/blog-post",
    },
    {
      image: "https://uomo-html.flexkitux.com/images/blog/blog-6.jpg",
      subHeading: "By Admin",
      published_date: "April 05, 2023",
      title: "Heaven upon heaven moveth every have.",
      description:
        "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
      link: "/blog-post",
    },
    {
      image: "https://uomo-html.flexkitux.com/images/blog/blog-7.jpg",
      subHeading: "By Admin",
      published_date: "April 05, 2023",
      title: "Tree doesn't good void, waters without created",
      description:
        "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
      link: "/blog-post",
    },
    {
      image: "https://uomo-html.flexkitux.com/images/blog/blog-6.jpg",
      subHeading: "By Admin",
      published_date: "April 05, 2023",
      title: "Heaven upon heaven moveth every have.",
      description:
        "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
      link: "/blog-post",
    },
  ];

  return (
    <>
      <section>
        <HeadingComponent
          data={{
            subHeading: "Latest Blogs",
            heading: "From Our Blog",
            description:
              "Checkout our latest blogs and stay updated with the latest trends.",
          }}
        />
        <div className="container">
          <div className="blog-grid row row-cols-2 row-cols-md-2 row-cols-xl-4">
            {data.map((item, index) => (
              <div className="blog-grid__item" key={index}>
                <div className="blog-grid__item-image">
                  <img
                    loading="lazy"
                    className="h-auto"
                    src={item.image}
                    width={450}
                    height={400}
                    alt=""
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="blog-grid__item-detail">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">
                      {item.subHeading}
                    </span>
                    <span className="blog-grid__item-meta__date">
                      {item.published_date}
                    </span>
                  </div>
                  <div className="blog-grid__item-title">
                    <div className="link-container">
                      <Link href={item.link} className="blog-link">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                  <div className="blog-grid__item-content">
                    {/* <p>{item.description}</p> */}
                    <div className="link-container">
                      <Link href={item.link} className="readmore-link">
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
