import { CiShoppingCart } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
const FeaturesSection = () => {
  return (
    <>
      <section className="service-promotion container">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="service-promotion__icon">
              <i className="features-icon">
                <CiShoppingCart />
              </i>
            </div>
            <h3 className="service-promotion__title h5 text-uppercase">
              Fast And Free Delivery
            </h3>
            <p className="service-promotion__content text-secondary">
              Free delivery for all orders over $140
            </p>
          </div>
          {/* /.col-md-4 text-center*/}
          <div className="col-md-4 text-center">
            <div className="service-promotion__icon">
              <i className="features-icon">
                <CiHeadphones />
              </i>
            </div>
            <h3 className="service-promotion__title h5 text-uppercase">
              24/7 Customer Support
            </h3>
            <p className="service-promotion__content text-secondary">
              Friendly 24/7 customer support
            </p>
          </div>
          {/* /.col-md-4 text-center*/}
          <div className="col-md-4 text-center">
            <div className="service-promotion__icon ">
              <i className="features-icon">
                <CiCircleCheck />
              </i>
            </div>
            <h3 className="service-promotion__title h5 text-uppercase">
              Fully Customized
            </h3>
            <p className="service-promotion__content text-secondary">
              We offer fully customized jewelries
            </p>
          </div>
          {/* /.col-md-4 text-center*/}
        </div>
        {/* /.row */}
      </section>
    </>
  );
};

export default FeaturesSection;
