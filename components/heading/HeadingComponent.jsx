// import { PrismicRichText } from "@prismicio/react";

// const Heading = ({ data }) => {
//   const { subheading, heading, description } = data;

//   return (
//     <div className="row">
//       <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
//         <div className="section-title text-center mb-50">
//           <span>{subheading?.[0]?.text}</span>
//           <h2>{heading?.[0]?.text}</h2>
//           <PrismicRichText field={description} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heading;

const HeadingComponent = () => {
  return (
    <>
      <h2 className="section-title fw-normal fs-30 text-center mb-2">
        Shop By Category
      </h2>
      <p className="font-special fs-13 mb-3 pb-2 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>
    </>
  );
};

export default HeadingComponent;
