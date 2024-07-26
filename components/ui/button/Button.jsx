import ClipLoader from "@/components/global/loader/ClipLoader";

const Button = ({ onClick, type, loading, label, full, disabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={loading || disabled}
        className="btn btn-primary text-uppercase"
        type={type || "button"}
      >
        {loading ? <ClipLoader /> : label}
      </button>
      <style jsx>{`
        button {
          width: ${full ? "100%" : "fit-content"};
        }
      `}</style>
    </>
  );
};

export default Button;
