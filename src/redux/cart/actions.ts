import { Product } from "../../types/product";
import { CartActionTypes } from "./action-types";
import {
  AddProductAction,
  RemoveProductAction,
  IncreaseProductAction,
  DecreaseProductAction,
  ClearCartAction,
} from "./types";

export const addProduct = (payload: Product): AddProductAction => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload: string): RemoveProductAction => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProduct = (payload: string): IncreaseProductAction => ({
  type: CartActionTypes.INCREASE_PRODUCT,
  payload,
});

export const decreaseProduct = (payload: string): DecreaseProductAction => ({
  type: CartActionTypes.DECREASE_PRODUCT,
  payload,
});

export const clearCart = (): ClearCartAction => ({
  type: CartActionTypes.CLEAR_CART,
});
