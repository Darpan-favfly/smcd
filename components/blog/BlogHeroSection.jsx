import dayjs from "dayjs";

const BlogHeroSection = () => {
  // Hardcoded data
  const data = {
    heading:
      "The Rise of Lab-Grown Diamonds: Revolutionizing the Jewelry Industry",
    description:
      "This is an example description for the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featured_image: {
      url: "https://images.prismic.io/complymyrera/ZlV9tKWtHYXtT1bt_Zk3TFiol0Zci9WUl_OverseasDirectInvestment-ODI-UnderFEMAInIndia-11KeyPointsToBeConsidered-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1200%2C600&w=1200&fit=max",
      alt: "Example Image",
    },
    published_date: "2023-06-28",
  };

  return (
    <div className="blog-details-section pt-90 pb-60" style={{ marginTop: 40 }}>
      <div className="container">
        <div className="row gy-5 blog-hero">
          <div className="col-lg-10 mx-auto">
            <div className="blog-details-single mb-0">
              <div className="text">
                <ul className="post-meta-list mt-0">
                  <li>
                    <span>
                      {dayjs(data.published_date).format("DD MMM, YYYY")}
                    </span>
                  </li>
                </ul>
                <h1>{data.heading}</h1>
                <div className="para">
                  <p>{data.description}</p>
                </div>
              </div>
              <div className="image pt-3 mb-0">
                <img
                  src={data.featured_image.url}
                  alt={data.featured_image.alt}
                  className="img-fluid mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
