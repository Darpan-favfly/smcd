import { CiShoppingCart, CiHeadphones, CiCircleCheck } from "react-icons/ci";
import HeadingComponent from "../heading/HeadingComponent";
const FeaturesSection = () => {
  const featuresData = [
    {
      icon: <CiShoppingCart />,
      title: "Fast And Free Delivery",
      content: "Free delivery for all orders over $140",
    },
    {
      icon: <CiHeadphones />,
      title: "24/7 Customer Support",
      content: "Friendly 24/7 customer support",
    },
    {
      icon: <CiCircleCheck />,
      title: "Fully Customized",
      content: "We offer fully customized jewelries",
    },
  ];

  return (
    <>
      <section className="service-promotion container">
        {/* Optional HeadingComponent */}
        {/* <HeadingComponent /> */}
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-md-4 text-center">
              <div className="service-promotion__icon">
                <i className="features-icon">{feature.icon}</i>
              </div>
              <h3 className="service-promotion__title h5 text-uppercase">
                {feature.title}
              </h3>
              <p className="service-promotion__content text-secondary">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
