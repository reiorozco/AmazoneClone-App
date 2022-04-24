import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    productAdded: (products, action) => {
      products.list.push(action.payload);
    },

    productRemoved: (products, action) => {
      const index = products.list.findIndex(
        (product) => (product.id = action.payload.id)
      );
      products.list.splice(index, 1);
    },
  },
});

export const { productAdded, productRemoved } = basketSlice.actions;
export default basketSlice.reducer;
