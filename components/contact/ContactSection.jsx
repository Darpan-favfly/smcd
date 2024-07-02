const ContactSection = () => {
  return (
    <>
      <section className="info-box section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-head mb-30">
                <div className="section-subtitle">CONTACT INFO</div>
                <div className="section-title mb-20">Get In Touch</div>
                <div className="section-description">
                  <p>
                    Barber utate ons amet ravida haretra nuam the duru miss
                    uctus the drana accumsan justo aliquam sit amet auctor orci
                    done vitae.
                  </p>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <img src="https://images.prismic.io/complymyrera/ZlG-uiol0Zci9cS6_maps-and-flags.png?auto=format,compress" />
                </span>
                <div className="cont">
                  <h5>Address</h5>
                  <p>0665 Broadway NY, 10001 USA</p>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <img src="https://images.prismic.io/complymyrera/ZlG-uyol0Zci9cS7_call.png?auto=format,compress" />
                </span>
                <div className="cont">
                  <h5>Phone</h5>
                  <p>+917718420098</p>
                </div>
              </div>
              <div className="item">
                <span className="icon contact-icon">
                  <img src="https://images.prismic.io/complymyrera/ZlG-uSol0Zci9cS5_email.png?auto=format,compress" />
                </span>
                <div className="cont">
                  <h5>Email</h5>
                  <p>favfly.arindam@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="contact-form bg-darkbrown">
                <div className="booking-inner clearfix">
                  <iframe
                    style={{ border: "none", width: "100%" }}
                    id="contact-form-5hj56y"
                    src="https://opnform.com/forms/contact-form-5hj56y"
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

export default ContactSection;
