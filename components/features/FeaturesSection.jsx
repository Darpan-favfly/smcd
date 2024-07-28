import { PrismicNextImage } from "@prismicio/next";

const FeaturesSection = ({ slice }) => {
  const pastelColors = ["#f0f8ff", "#fcf0ff", "#fff1f0", "#f0fff1"];

  return (
    <>
      <section className="service-promotion container py-0">
        <div
          className="row"
          style={{
            rowGap: "15px",
          }}
        >
          {slice?.primary?.items?.map((item, index) => (
            <FeatureItem
              key={index}
              data={item}
              bgColor={pastelColors[index]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

const FeatureItem = ({ data, bgColor }) => {
  const { icon, title } = data;

  return (
    <div className="col-6 col-md-3 text-center px-2">
      <div
        className="h-100 px-3 py-4 py-lg-5"
        style={{
          backgroundColor: bgColor,
          borderRadius: "15px",
        }}
      >
        <div className={`service-promotion__icon`}>
          <i className="features-icon">
            <PrismicNextImage field={icon} fallbackAlt="" />
          </i>
        </div>
        <h3 className="service-promotion__title text-uppercase mb-0">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default FeaturesSection;
