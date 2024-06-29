const BlogDetailSection = () => {
  // Hardcoded data
  const blogDetails = [
    {
      heading:
        "Expanding Your Business: Regime Of Overseas Direct Investment Under FEMA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.",
      imageUrl: "https://i.ibb.co/xMQCjcw/2-2.png",
      imageAlt: "Example Image 1",
    },
    {
      heading:
        "Expanding Your Business: Regime Of Overseas Direct Investment Under FEMA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.",
      imageUrl:
        "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-mangalsutra-24052024.jpg",
      imageAlt: "Example Image 2",
    },
    {
      heading:
        "Expanding Your Business: Regime Of Overseas Direct Investment Under FEMA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Similarly, the Reserve Bank Of India (RBI) has also issued Foreign Exchange Management Regulations in 2022 to help businesses with.",
    },
  ];

  return (
    <div className="details-section" style={{ padding: "30px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {blogDetails.map((item, index) => (
              <div key={index}>
                <h2>
                  <strong>{item.heading}</strong>
                </h2>
                {item.text && <p>{item.text}</p>}
                {item.imageUrl && (
                  <div style={{ maxWidth: "600px" }}>
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className="my-4"
                      style={{ width: "100%", borderRadius: "15px" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
