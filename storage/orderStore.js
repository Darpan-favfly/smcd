// userStore.js

import { create } from "zustand";
import { db } from "@/lib/firebaseClient/firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import sortBy from "sort-by";

// =============== USER PROFILE STORE ===============
const orderStore = create((set, get) => ({
  orders: [],

  // =============== ADD ORDER ===============
  addOrder: async (data) => {
    try {
      const { cart, billingAddress, shippingAddress, userId } = data;

      for (let index = 0; index < cart.length; index++) {
        const date = Date.now();

        const order = {
          userId,
          billingAddress,
          shippingAddress,
          status: "pending",
          productDetails: cart[index],
          createdAt: date,
          updatedAt: date,
        };

        await addDoc(collection(db, "orders"), order);
      }

      toast.success("Order successfully");
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error adding order");
      return false;
    }
  },

  // =============== LOAD ORDERS BY ID ===============
  loadAllOrdersById: async (uid) => {
    try {
      const q = query(collection(db, "orders"), where("userId", "==", uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return [];
      }

      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });

      orders.sort(sortBy("-createdAt"));

      set({ orders });
      return orders;
    } catch (error) {
      console.log("Error getting document:", error);
      return [];
    }
  },
}));

export { orderStore };
