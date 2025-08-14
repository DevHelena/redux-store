import { RootState } from "../rootReducer";

export const selectProductsCount = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const selectProductsTotalPrice = (state: RootState) => {
  return state.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
};