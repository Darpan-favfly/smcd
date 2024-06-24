import HeadingComponent from "../heading/HeadingComponent";

const CategoriesSection = () => {
  return (
    <>
      <section className="section-category">
        <HeadingComponent />
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-ring-24052024.jpg"
                alt=""
              />
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-bangle-24052024.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-4 video-container" style={{ gap: 15 }}>
              <video className="full-height-video" autoPlay muted>
                <source
                  src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-neckalce-24052024.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-earring-24052024.jpg"
                alt=""
              />
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-mangalsutra-24052024.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
