"use client";

import { auth } from "@/lib/firebaseClient/firebase";
import { userProfileStore } from "@/storage/userProfileStore";
import { orderStore } from "@/storage/orderStore";
import { cartStore } from "@/storage/cartStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const FirebaseAuthProvider = ({ children }) => {
  const { loadUserProfile } = userProfileStore();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        userProfileStore.setState({ user: user });

        await loadUserProfile({ uid, email, name: displayName });
      } else {
        console.log("No user is signed in.");
        userProfileStore.setState({
          user: null,
          userProfile: null,
          userLoading: false,
        });

        orderStore.setState({ orders: [] });
        cartStore.setState({ cart: [] });
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthProvider;
