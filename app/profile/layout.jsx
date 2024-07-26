import AuthGuard from "@/components/auth/AuthGuard";
import ProfileSideBar from "@/components/profile/ProfileSideBar";

const DashboardLayout = ({ children }) => {
  return (
    <AuthGuard>
      <section className="my-account container mt-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-lg-3">
                <ProfileSideBar />
              </div>
              <div className="col-lg-9">
                <div className="page-content mt-3">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthGuard>
  );
};

export default DashboardLayout;
