"use client";

import PageLoader from "@/components/global/loader/PageLoader";
import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }) => {
  // ===== INITIALIZING STORES =====
  const { userProfile, userLoading } = userProfileStore();

  const router = useRouter();

  // ===== CHECKING IF CLIENT IS LOGGED IN =====
  if (userLoading) {
    return <PageLoader />;
  }
  if (!userProfile) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
