import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingProductIndex = state.components.findIndex(
        (item) => item.category === action.payload.category
      );

      if (existingProductIndex !== -1) {
        // Replace the existing product with the new one
        state.total -= parseFloat(state.components[existingProductIndex].price);
        state.components.splice(existingProductIndex, 1, action.payload);
        state.total += parseFloat(action.payload.price);
      } else {
        // Add the new product to the cart
        state.components.push(action.payload);
        state.total += parseFloat(action.payload.price);
      }
    },
    removeItem: (state, action) => {
      const categoryToRemove = action.payload;
      const removedProductIndex = state.components.findIndex(
        (item) => item.category === categoryToRemove
      );

      if (removedProductIndex !== -1) {
        // Remove the product from the cart and update the total
        const removedProduct = state.components[removedProductIndex];
        state.components.splice(removedProductIndex, 1);
        state.total -= parseFloat(removedProduct.price);
      }
    },
    clearCart: (state) => {
      state.components = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
