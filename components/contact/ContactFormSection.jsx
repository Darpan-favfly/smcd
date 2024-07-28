import { PrismicRichText } from "@prismicio/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactFormSection = ({ slice }) => {
  const {
    heading,
    sub_heading,
    description,
    address,
    phone,
    email,
    form_id,
    map_link,
  } = slice.primary;

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

              {/* // ===== CONTACT INFO SECTION ===== */}
              <div className="item">
                <span className="icon contact-icon">
                  <FaMapMarkerAlt />
                </span>
                <div className="cont">
                  <h5>Address</h5>
                  <p>{address}</p>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <FaPhoneAlt />
                </span>
                <div className="cont">
                  <h5>Phone</h5>
                  <a href={`tel:${phone}`} target="_blank">
                    <p>{phone}</p>
                  </a>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <FaEnvelope />
                </span>
                <div className="cont">
                  <h5>Email</h5>
                  <a href={`mailto:${email}`} target="_blank">
                    <p>{email}</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="contact-form bg-darkbrown">
                <div className="booking-inner clearfix">
                  <iframe
                    style={{ border: "none", width: "100%" }}
                    id="contact-form-5hj56y"
                    className="br-15 overflow-hidden"
                    src={form_id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // ===== MAP EMBEDDED SECTION ===== */}
      <div className="full-width">
        <div className="no-spacing map">
          <iframe src={map_link} frameBorder={0} className="google-maps" />
        </div>
      </div>
    </>
  );
};

export default ContactFormSection;
