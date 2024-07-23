// userStore.js

import { create } from "zustand";
import { db } from "@/lib/firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  updateDoc,
  addDoc,
} from "firebase/firestore";

// =============== USER PROFILE STORE ===============
const orderStore = create((set, get) => ({
  orders: [],
  user: null,
  loading: false,
  error: null,

  // Add order but if there are other orders that are already in the database then don't overwrite them add just create a new document each
  addOrder: async (order) => {
    set({ loading: true });
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      set({ loading: false });
    } catch (error) {
      set({ loading: false, error });
    }
  },

  getUserOrders: async (uid) => {
    set({ loading: true });
    try {
      const q = query(collection(db, "orders"), where("userId", "==", uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        set({ orders: [], loading: false });
        return [];
      } else {
        const orders = querySnapshot.docs.map((doc) => doc.data());
        set({ orders, loading: false });
        return orders;
      }
    } catch (error) {
      console.log("Error getting document:", error);
      set({ loading: false, error });
      return [];
    }
  },

  getUser: async (userId) => {
    set({ loading: true });
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        set({ user: docSnap.data(), loading: false });
      } else {
        set({ user: null, loading: false });
      }
    } catch (error) {
      console.log("Error getting user:", error);
      set({ user: null, loading: false, error });
    }
  },

  updateUser: async (userId, data) => {
    set({ loading: true });
    try {
      const docRef = doc(db, "users", userId);
      await updateDoc(docRef, data);
      set({ loading: false });
    } catch (error) {
      console.log("Error updating user:", error);
      set({ loading: false, error });
    }
  },
}));

const useOrderStore = orderStore;
export default useOrderStore;
