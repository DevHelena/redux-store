import { Product } from "../../types/product";
import { CartActionTypes } from "./action-types";

export type CartItem = Product & { quantity: number };

export type CartState = {
  products: CartItem[];
};

export type AddProductAction = {
  type: typeof CartActionTypes.ADD_PRODUCT;
  payload: Product;
};

export type RemoveProductAction = {
  type: typeof CartActionTypes.REMOVE_PRODUCT;
  payload: string;
};

export type IncreaseProductAction = {
  type: typeof CartActionTypes.INCREASE_PRODUCT;
  payload: string;
};

export type DecreaseProductAction = {
  type: typeof CartActionTypes.DECREASE_PRODUCT;
  payload: string;
};

export type ClearCartAction = {
  type: typeof CartActionTypes.CLEAR_CART;
};

export type CartAction =
  | AddProductAction
  | RemoveProductAction
  | IncreaseProductAction
  | DecreaseProductAction
  | ClearCartAction;
