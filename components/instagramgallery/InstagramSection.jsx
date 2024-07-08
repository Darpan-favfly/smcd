const InstagramSection = ({ slice }) => {
  return (
    <>
      <div style={{ padding: 15 }}>
        <div
          loading="lazy"
          data-mc-src="f8236406-68ae-4abc-8a85-06206dca4b4d#instagram"
        ></div>
        <script src={slice?.primary?.woxo_id} async data-usrc></script>
      </div>
    </>
  );
};

export default InstagramSection;
