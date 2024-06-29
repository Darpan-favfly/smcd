const CtaContactSection = () => {
  return (
    <>
      <section
        className="mb-100"
        style={{
          backgroundColor: "rgb(233, 242, 246)",
          paddingTop: 32,
          paddingBottom: 32,
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="row">
          <div className="col-xs-12 text-center">
            <h2
              style={{
                textAlign: "center",
                marginBottom: 24,
                fontSize: 24,
                fontFamily: "Poppins, arial, sans-serif",
                color: "rgb(51, 51, 51)",
              }}
            >
              Have Any Questions?
            </h2>
            <p
              className="center-block"
              style={{
                width: "auto",
                fontSize: 16,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              We’re a proud, independent company that takes every correspondence
              with our clients to heart. If you have any questions or concerns,
              please let us know!
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <a
              href="/contact"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium mt-4"
            >
              Contact Us
            </a>
            {/**/}
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaContactSection;
