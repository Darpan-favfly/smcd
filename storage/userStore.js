// userStore.js

import { create } from "zustand";
import { toast } from "react-hot-toast";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";

import { auth, db } from "@/lib/firebaseClient/firebase";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  updateDoc,
} from "firebase/firestore";

// =============== USER PROFILE STORE ===============
const userProfileStore = create((set, get) => ({
  user: null, // user state
  userProfile: null, // user state
  userLoading: true, // user loading state

  // =============== HANDLE EMAIL & PASSWORD SIGN-UP ===============
  handleEmailPasswordSignUp: async ({ name, email, password }) => {
    try {
      // SIGN UP USER
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const { uid } = user;

      // CREATE USER & USER-PROFILE
      const res = await createUser({ uid, name, email });

      if (res) {
        set({
          userProfile: res,
          userLoading: false,
        });

        toast.success("User created successfully");
        return user;
      } else {
        set({
          userProfile: null,
          userLoading: false,
        });
        return null;
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      } else if (
        error.message === "Firebase: Error (auth/admin-restricted-operation)."
      ) {
        toast.error("This operation is restricted to administrators.");
      } else {
        toast.error(error.message);
      }

      return null;
    }
  },

  // =============== HANDLE EMAIL & PASSWORD LOGIN ===============
  handleEmailPasswordLogin: async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      toast.success("Login Successfully");

      return user;
    } catch (error) {
      if (error.message == "Firebase: Error (auth/user-not-found).") {
        toast.error("User not found");
      } else if (error.message == "Firebase: Error (auth/wrong-password).") {
        toast.error("Wrong password");
      } else if (error.message == "Firebase: Error (auth/too-many-requests).") {
        toast.error(
          "Too many unsuccessful login attempts. Please try again later."
        );
      } else {
        toast.error(error.message);
      }

      return null;
    }
  },

  // =============== HANDLE FORGOT PASSWORD ===============
  handleForgotPassword: async ({ email }) => {
    try {
      await sendPasswordResetEmail(auth, email);

      toast.success("Password reset link sent to your email");
      return true;
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
      return false;
    }
  },

  // =============== HANDLE RESET PASSWORD ===============
  handleResetPassword: async ({ actionCode, newPassword }) => {
    try {
      await confirmPasswordReset(auth, actionCode, newPassword);

      toast.success("Password reset successfully");
      return true;
    } catch (error) {
      console.error("Error updating password:", error);

      if (error.message == "Firebase: Error (auth/invalid-action-code).") {
        toast.error("Expired action code");
      } else {
        toast.error(error.message);
      }
      return false;
    }
  },

  // =============== HANDLE CHECK USER EXIST BASED ON EMAIL ===============
  checkUserExist: async (email) => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        toast.error("Email not exist");
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log("Error getting document:", error);
      return false;
    }
  },

  // =============== GET SINGLE USER BY ID ===============
  getUserById: async (id) => {
    try {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error getting document:", error);
      return null;
    }
  },

  // =============== HANDLE LOAD USER PROFILE =====
  loadUserProfile: async ({ uid }) => {
    // GET USER PROFILE STATE
    const userProfile = get().userProfile;
    if (userProfile) return;

    try {
      // ===== CHECK IF USER EXISTS =====
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      // ===== IF USER EXISTS =====
      if (docSnap.exists()) {
        const { email, name } = docSnap.data();

        // ===== SET USER-PROFILE =====
        set({
          userProfile: {
            uid,
            email,
            name,
          },
          userLoading: false,
        });
      }
    } catch (error) {
      console.log("error", error);
      set({
        userProfile: null,
        userLoading: false,
      });
    }
  },

  // =============== HANDLE UPDATE USER ===============
  handleUpdateUser: async (data) => {
    try {
      const { uid, name, email } = data;

      const user = auth.currentUser;

      await updateProfile(user, {
        displayName: name,
      });

      await updateEmail(user, email);

      // ===== UPDATE USER-PROFILE =====
      const date = Date.now();

      await updateDoc(doc(db, "users", uid), {
        name,
        email,
        updatedAt: date,
      });

      set((state) => ({
        userProfile: {
          ...state.userProfile,
          name,
          email,
          updatedAt: date,
        },
      }));

      toast.success("Profile updated successfully");

      return true;
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error.message);
      return false;
    }
  },

  // =============== HANDLE UPDATE USER ADDRESS ===============
  handleUpdateUserAddress: async (formData) => {
    try {
      const { uid, name, email } = data;

      const user = auth.currentUser;

      await updateProfile(user, {
        displayName: name,
      });

      await updateEmail(user, email);

      // ===== UPDATE USER-PROFILE =====
      const date = Date.now();

      await updateDoc(doc(db, "users", uid), {
        name,
        email,
        updatedAt: date,
      });

      set((state) => ({
        userProfile: {
          ...state.userProfile,
          name,
          email,
          updatedAt: date,
        },
      }));

      toast.success("Profile updated successfully");

      return true;
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error.message);
      return false;
    }
  },
  // =============== HANDLE UPDATE USER EMAIL ===============
  handleUpdateUserEmail: async (data) => {
    try {
      const { currentPassword, newEmail } = data;

      const user = auth.currentUser;

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      await updateEmail(user, newEmail);

      const date = new Date();

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        email: newEmail,
      });

      set((state) => ({
        userProfile: {
          ...state.userProfile,
          email: newEmail,
          updatedAt: date,
        },
      }));

      toast.success("Email updated successfully");

      return true;
    } catch (error) {
      console.error("Error updating user email:", error);

      let errorMessage;

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage =
            "The email address is already in use by another account.";
          break;
        case "auth/invalid-email":
          errorMessage = "The email address is not valid.";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email address.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/weak-password":
          errorMessage = "The password is too weak.";
          break;
        case "auth/requires-recent-login":
          errorMessage = "Please reauthenticate and try again.";
          break;
        default:
          errorMessage = "An error occurred. Please try again.";
          break;
      }

      toast.error(errorMessage);

      return false;
    }
  },

  // =============== HANDLE UPDATE USER PASSWORD ===============
  handleUpdateUserPassword: async (data) => {
    try {
      const { currentPassword, newPassword } = data;

      const user = auth.currentUser;

      // Reauthenticate
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, newPassword);

      toast.success("Password updated successfully");

      return true;
    } catch (error) {
      console.error("Error updating password:", error.code);

      let errorMessage;

      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/weak-password":
          errorMessage = "The password is too weak.";
          break;
        case "auth/requires-recent-login":
          errorMessage = "Please reauthenticate and try again.";
          break;
        default:
          errorMessage = "An error occurred. Please try again.";
          break;
      }

      toast.error(errorMessage);

      return false;
    }
  },

  // =============== HANDLE UPDATE USER ADDRESS BY UID ===============
  updateUserAddress: async (formData, uid) => {
    console.log("formData", formData, uid, "uid");
    try {
      const date = new Date();

      await updateDoc(doc(db, "users", uid), {
        address: formData,
        updatedAt: date,
      });

      return true;
    } catch (error) {
      console.error("Error updating user address:", error);
      return false;
    }
  },
}));

// =============== CREATE USER & USER-PROFILE =================
const createUser = async ({ uid, name, email }) => {
  try {
    const date = new Date();

    await setDoc(doc(collection(db, "users"), uid), {
      name,
      email,
      createdAt: date,
      updatedAt: date,
      lastLoginAt: date,
    });

    toast.success("Login Successfully");
    return {
      uid,
      email,
      name,
      createdAt: date,
      updatedAt: date,
      lastLoginAt: date,
    };

    // USER WILL BE REDIRECTED TO DASHBOARD
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");

    return null;
  }
};

// =============== EXPORT STORES ===============
export { userProfileStore };
