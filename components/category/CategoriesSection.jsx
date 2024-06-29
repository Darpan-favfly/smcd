import HeadingComponent from "../heading/HeadingComponent";

const CategoriesSection = () => {
  const imagesColumn1 = [
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-ring-24052024.jpg",
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-bangle-24052024.jpg",
  ];

  const imagesColumn3 = [
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-earring-24052024.jpg",
    "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-mangalsutra-24052024.jpg",
  ];

  return (
    <>
      <section className="section-category">
        <HeadingComponent
          data={{
            heading: "Shop By Category",
            description: "Shop from our wide range of categories.",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              {imagesColumn1.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} />
              ))}
            </div>
            <div className="col-lg-4 video-container" style={{ gap: 15 }}>
              <video className="full-height-video" autoPlay muted loop>
                <source
                  src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-neckalce-24052024.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-lg-4" style={{ gap: 15, padding: 0 }}>
              {imagesColumn3.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
