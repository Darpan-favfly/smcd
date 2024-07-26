import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";

const UserProfileButton = ({ setIsOpen }) => {
  // ===== INITIALIZING STORES =====
  const { userProfile } = userProfileStore();

  // ===== INITIALIZING HOOKS =====
  const router = useRouter();

  return (
    <button
      className="header-tools__item header-tools__user js-open-aside"
      onClick={() => {
        if (userProfile?.uid) {
          router.push("/profile");
        } else {
          setIsOpen(true);
        }
      }}
    >
      <CiUser />
      {userProfile?.name && (
        <span className="ms-2"> Hi, {userProfile?.name?.split(" ")[0]}</span>
      )}
    </button>
  );
};

export default UserProfileButton;
