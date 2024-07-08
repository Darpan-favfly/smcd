import { PrismicRichText } from "@prismicio/react";

const ContactFormSection = ({ slice }) => {
  const { heading, sub_heading, description, address, phone, email, form_id } =
    slice.primary || {};
  console.log(sub_heading);
  return (
    <>
      <section className="info-box section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-head mb-30">
                <div className="section-subtitle">{sub_heading}</div>
                <div className="section-title mb-20">
                  <PrismicRichText field={heading} />
                </div>
                <div className="section-description">
                  <PrismicRichText field={description} />
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <img src="https://images.prismic.io/complymyrera/ZlG-uiol0Zci9cS6_maps-and-flags.png?auto=format,compress" />
                </span>
                <div className="cont">
                  <h5>Address</h5>
                  <p>{address}</p>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <img src="https://images.prismic.io/complymyrera/ZlG-uyol0Zci9cS7_call.png?auto=format,compress" />
                </span>
                <div className="cont">
                  <h5>Phone</h5>
                  <p>{phone}</p>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <img src="https://images.prismic.io/complymyrera/ZlG-uSol0Zci9cS5_email.png?auto=format,compress" />
                </span>
                <div className="cont">
                  <h5>Email</h5>
                  <p>{email}</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="contact-form bg-darkbrown">
                <div className="booking-inner clearfix">
                  <iframe
                    style={{ border: "none", width: "100%" }}
                    id="contact-form-5hj56y"
                    src={form_id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
