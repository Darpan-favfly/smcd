import Link from "next/link";
const BlogCtaSection = () => {
  // Hardcoded data
  const data = {
    heading: "Discover the Beauty of Lab-Grown Diamonds",
    description:
      "Lab-grown diamonds are not only stunning but also environmentally friendly. Learn more about how these gems are revolutionizing the jewelry industry.",
    button_label: "Learn More",
    button_link: "/learn-more",
  };

  return (
    <section className="cta-section cta-section--blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="cta-content">
              <div className="cta-heading">
                <h2 className="cta-heading__main">
                  Understand The ODI Maze Under FEMA With DSRV India!
                </h2>
              </div>
              <div className="cta-description">
                <p>
                  Let us help you understand all the confusion on ODI
                  regulations with our expert approach.
                </p>
              </div>
              <div className="cta-blog-button ">
                <Link target="" rel="noreferrer" href="https://www.google.com">
                  Get Connected!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCtaSection;
