import { CiShoppingCart, CiHeadphones, CiCircleCheck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";

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
    {
      icon: <CiDiscount1 />,
      title: "Get Cheapest Rate",
      content: "You will get the chipest price here",
    },
  ];

  return (
    <>
      <section className="service-promotion container">
        {/* Optional HeadingComponent */}
        {/* <HeadingComponent /> */}
        <div className="row justify-content-between">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-md-3 text-center col-5">
              <div className="service-promotion__icon">
                <i className="features-icon">{feature.icon}</i>
              </div>
              <h3 className="service-promotion__title h5 text-uppercase">
                {feature.title}
              </h3>
              {/* <p className="service-promotion__content text-secondary">
                {feature.content}
              </p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
