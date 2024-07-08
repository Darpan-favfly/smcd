const MapSection = ({ data }) => {
  return (
    <>
      <section className="section-padding pb-0 pt-0 bg-darkbrown">
        <div className="full-width">
          <div className="no-spacing map">
            <iframe
              src={data.primary.map_link}
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
