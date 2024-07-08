import { PrismicNextImage } from "@prismicio/next";
const FeaturesSection = ({ slice }) => {
  return (
    <>
      <section className="service-promotion container">
        {/* Optional HeadingComponent */}
        {/* <HeadingComponent /> */}
        <div className="row justify-content-between">
          {slice?.primary?.items?.map((item, index) => (
            <div key={index} className="col-md-3 text-center col-5">
              <div className="service-promotion__icon">
                <i className="features-icon">
                  <PrismicNextImage field={item.icon} alt={item.icon.alt} />
                </i>
              </div>
              <h3 className="service-promotion__title h5 text-uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
