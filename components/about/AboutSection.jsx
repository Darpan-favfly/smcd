import HeadingComponent from "../heading/HeadingComponent";

const AboutSection = () => {
  return (
    <>
      <section className="container mb-100">
        <HeadingComponent
          data={{
            heading: "Know About Us",
            description:
              " We are passionate about creating high-quality engagement rings and fine jewelry",
          }}
        />
        <div className="row">
          <div className="col-lg-6 special-block-grid-left">
            <div
              className="special-block-wrapper"
              style={{
                backgroundColor: "rgb(28, 99, 146)",
                display: "flex",
                alignItems: "center",
                minHeight: "auto",
              }}
            >
              <div>
                <h3 className="special-block under-bar-white">
                  Our Ethical Standards
                </h3>
                <p>
                  At smcjewels, we prioritize ethical practices in everything we
                  do. Our dedication to sourcing
                  <strong>conflict-free diamonds</strong> and ensuring our
                  materials are is paramount.
                </p>
                <p>
                  You can trust the origins of every jewelry item we make,
                  knowing it's been crafted with respect for our planet. We
                  believe true brilliance shines from within, and we proudly
                  uphold the
                  <strong>highest ethical standards in the industry</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 special-block-img-left flex-center d-flex">
            <img
              alt="Our Ethical Standards"
              className="img-responsive"
              src="https://i.ibb.co/vhyx3Jg/our-ethical-standards-edad6d72.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
