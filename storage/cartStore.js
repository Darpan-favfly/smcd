// cart store
import { create } from "zustand";

const cartStore = create((set) => ({
  cart: [],

  // ===== ADD TO CART =====
  addToCartItem: (product) => {
    set((state) => {
      return { cart: [...state.cart, product] };
    });

    localStorage.setItem(
      "cart",
      JSON.stringify([...cartStore.getState().cart])
    );
  },

  // ===== LOAD CART =====
  loadCart: () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      set({ cart: JSON.parse(cart) });
    }
  },

  // ===== REMOVE FROM CART =====
  removeCartItem: (index) => {
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    }));

    localStorage.setItem(
      "cart",
      JSON.stringify(cartStore.getState().cart.filter((_, i) => i !== index))
    );
  },
}));

export { cartStore };
