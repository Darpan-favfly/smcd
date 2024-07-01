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
                  <form
                    method="post"
                    className="form1 clearfix contact__form"
                    action="https://duruthemes.com/demo/html/perukar/multipage-video/mail.php"
                  >
                    <div className="row">
                      <div className="col-md-12 text-center mb-20">
                        <h4 className="white">Contact Form</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div
                          className="alert alert-success contact__msg"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Your message was sent successfully.
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label>Name</label>
                          <div className="input2_inner">
                            <input
                              className="form-control input"
                              placeholder="Name"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label>Phone</label>
                          <div className="input2_inner">
                            <input
                              className="form-control input"
                              placeholder="Phone"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label>e-Mail</label>
                          <div className="input2_inner">
                            <input
                              className="form-control input"
                              placeholder="e-Mail"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label>Subject</label>
                          <div className="input2_inner">
                            <input
                              className="form-control input"
                              placeholder="Subject"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 form-group mt-4">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12 mb-30">
                        <button type="submit" className="btn-form2-submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
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
