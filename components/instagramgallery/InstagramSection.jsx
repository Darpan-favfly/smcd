"use client";
const InstagramSection = ({ slice }) => {
  return (
    <>
      <div
        className="insta-embed"
        loading="lazy"
        data-mc-src="bcdf48aa-de2a-4051-8bce-bb4e68be777b#instagram"
      ></div>
      <script
        src="https://cdn2.woxo.tech/a.js#65424435be0658d5e4531c3a"
        async
        data-usrc
      ></script>

      <style jsx>{`
        .insta-embed {
          max-width: 900px;
          margin: 0 auto;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default InstagramSection;
