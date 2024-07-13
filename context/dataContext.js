// "use client";
// import React, { createContext, useState, useEffect } from "react";

// export const DataContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(savedCartItems);
//     calculateSubtotal(savedCartItems);
//   }, []);

//   // CART ======================================================================================================================================

//   // =============== LOAD CART ===============
//   const loadCart = async () => {
//     let storedCart = localStorage.getItem("cart");
//     const cart = storedCart ? JSON.parse(storedCart) : [];
//     setCart(cart);
//   };

//   // =============== ADD CART ===============
//   const addCart = async (tempCart) => {
//     try {
//       let tCart = cart;
//       let itemIndex = tCart.findIndex(
//         (i) => i.productId === tempCart.productId
//       );
//       if (itemIndex === -1) {
//         tCart.push(tempCart);
//         setCart(tCart);
//       } else {
//         tCart[itemIndex].quantity = tempCart.quantity;
//         setCart(tCart);
//       }

//       localStorage.setItem("cart", JSON.stringify(tCart));
//     } catch (error) {
//       console.log(error.code);
//     }
//   };

//   // =============== UPDATE CART =================

//   const updateCart = async (tempCart) => {
//     try {
//       let tCart = cart;
//       let itemIndex = tCart.findIndex(
//         (i) => i.productId === tempCart.productId
//       );
//       if (itemIndex === -1) {
//         tCart.push(tempCart);
//         setCart(tCart);
//       } else {
//         tCart[itemIndex].quantity = tempCart.quantity;
//         setCart(tCart);
//       }

//       localStorage.setItem("cart", JSON.stringify(tCart));
//     } catch (error) {
//       console.log(error.code);
//     }
//     q;
//   };

//   // =============== DELETE CART =================
//   const deleteCart = async (productId) => {
//     try {
//       if (cart?.length != 0) {
//         const filterProducts = cart?.filter(
//           (item, index) => item?.productId !== productId
//         );
//         setCart(filterProducts);
//         localStorage.setItem("cart", JSON.stringify(filterProducts));
//       }
//       // USER WILL BE REDIRECTED TO DASHBOARD
//     } catch (error) {
//       console.log(error.code);
//     }
//   };

//   // =============== DELETE ALL CART =================
//   const deleteAllCart = async () => {
//     try {
//       localStorage.clear();
//       setCart([]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         cartItems,
//         setCartItems,
//         subtotal,
//         setSubtotal,
//         cart,
//         setCart,
//         loadCart,
//         addCart,
//         updateCart,
//         deleteCart,
//         deleteAllCart,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const AuthContext = createContext(); // Define your AuthContext here
