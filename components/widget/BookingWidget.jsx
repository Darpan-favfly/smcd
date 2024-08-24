"use client";
const BookingWidget = () => {
  return (
    <>
      <aside className="position-relative widget widget-shadow widget-reservation bg-white px-0 py-0 overflow-hidden">
        <iframe
          id="sticky-form"
          src="https://opnform.com/forms/smcd-blog-form-a98cwo"
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
