"use client";
const BookingWidget = () => {
  return (
    <>
      <aside className="position-relative widget widget-shadow widget-reservation bg-white px-0 py-0 overflow-hidden">
        {/* <h3 className="mb-0">Plan Your Forever Moment</h3> */}
        <iframe
          id="sticky-form"
          src="https://opnform.com/forms/contact-form-5hj56y"
          style={{ border: "none", width: "100%" }}
        />
        <style jsx>{`
          .widget {
            border-radius: 15px;
          }
          iframe {
            height: 500px;
          }
        `}</style>
      </aside>
    </>
  );
};

export default BookingWidget;
