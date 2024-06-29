const MapSection = () => {
  return (
    <>
      <section className="section-padding pb-0 pt-0 bg-darkbrown">
        <div className="full-width">
          <div className="no-spacing map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8046235648753!2d88.41208357587303!3d22.623769931091836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5f57a80a1%3A0x4afb92d4888fc5a3!2sFavfly%20%7C%20Best%20SEO%20%26%20Digital%20Marketing%20Company%20in%20Kolkata%2C%20India!5e0!3m2!1sen!2sin!4v1717658689331!5m2!1sen!2sin"
              frameBorder={0}
              className="google-maps"
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
