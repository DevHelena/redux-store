export const CartActionTypes = {
  ADD_PRODUCT: "cart/addProduct",
  REMOVE_PRODUCT: "cart/removeProduct",
  CLEAR_CART: "cart/clear",
  INCREASE_PRODUCT: "cart/increaseProduct",
  DECREASE_PRODUCT: "cart/decreaseProduct",
} as const;

export type CartActionType =
  typeof CartActionTypes[keyof typeof CartActionTypes];
