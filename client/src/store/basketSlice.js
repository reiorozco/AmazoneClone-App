import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    productAdded: (products, action) => {
      const isItemInCart = products.list.findIndex(
        (item) => item.id === action.payload.id
      );

      isItemInCart !== -1
        ? (products.list[isItemInCart].amount += 1)
        : products.list.push(action.payload);
    },

    productAmountChanged: (products, action) => {
      const item = products.list.findIndex(
        (item) => item.id === action.payload.id
      );
      products.list[item].amount = action.payload.amount;
    },

    productRemoved: (products, action) => {
      const index = products.list.findIndex(
        (product) => product.id === action.payload.id
      );
      products.list.splice(index, 1);
    },
  },
});

export const { productAdded, productRemoved, productAmountChanged } =
  basketSlice.actions;
export default basketSlice.reducer;
