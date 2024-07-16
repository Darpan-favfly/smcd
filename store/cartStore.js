import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const cartStore = (set) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? {
                ...item,
                ...product,
                quantity: product.quantity,
              }
            : item
        );
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, product] };
      }
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return { cart: updatedCart };
    });
  },
  getCartDetails: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    }
    return [];
  },
});

const useCartStore = create(devtools(persist(cartStore, { name: "cart" })));

export default useCartStore;
