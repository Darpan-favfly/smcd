"use client";

import { auth } from "@/lib/firebase/firebase";
import { userProfileStore } from "@/store/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const FirebaseAuthProvider = ({ children }) => {
  const { loadUserProfile } = userProfileStore();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        userProfileStore.setState({ admin: user });

        await loadUserProfile({ uid, email, name: displayName });
      } else {
        console.log("No user is signed in.");
        userProfileStore.setState({
          user: null,
          userProfile: null,
          userLoading: false,
        });
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthProvider;
