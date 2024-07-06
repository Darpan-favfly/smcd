const BookingWidget = () => {
  return (
    <>
      <aside className="position-relative widget widget-shadow widget-reservation bg-white px-0">
        <h3 className="mb-0">Plan Your Forever Moment</h3>
        <iframe
          id="sticky-form"
          src="https://opnform.com/forms/shaadibooks-lead-capture-md6hbu?e107f50b-40ae-410f-a599-6f9015974248=https://shaadibooks.com/groom-mehndi-poses"
          className="jsx-ceba691509555db3"
          style={{ border: "none", width: "100%" }}
        />
        <style jsx>{`
          .widget {
            border-radius: 15px;
          }
          iframe {
            height: 400px;
          }
        `}</style>
      </aside>
    </>
  );
};

export default BookingWidget;
