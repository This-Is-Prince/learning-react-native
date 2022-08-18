import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
    removeFromBasket: (state, action) => {
      //   state.items = state.items.filter((item) => {
      //     return item.id === action.payload;
      //   });
    },
  },
});
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export default basketSlice.reducer;
