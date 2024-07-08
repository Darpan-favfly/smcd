import { PrismicNextImage } from "@prismicio/next";

const CustomizeFormSection = ({ slice }) => {
  const { form_id, image } = slice?.primary;
  return (
    <>
      <section className="container mb-100">
        <div className="row">
          <div className="col-lg-6 special-block-grid-left">
            <div
              className="special-block-wrapper"
              style={{
                backgroundColor: "#f8f8f8",
                padding: 0,
                display: "flex",
                alignItems: "center",
                minHeight: "auto",
              }}
            >
              <iframe
                style={{ border: "none", width: "100%" }}
                id="form-simple-form-uokpse"
                src={form_id}
              />
            </div>
          </div>
          <div className="col-lg-6 special-block-img-left flex-center d-flex">
            <PrismicNextImage
              alt="Our Ethical Standards"
              className="img-responsive h-auto w-100"
              field={image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomizeFormSection;
