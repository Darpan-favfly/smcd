import ProfileSideBar from "@/components/profile/ProfileSideBar";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <section className="my-account container">
        <h2 className="page-title">Orders</h2>
        <div className="row">
          <ProfileSideBar />
          {children}
        </div>
      </section>
    </>
  );
};

export default ProfileLayout;
