import { CartActionTypes } from "./action-types";
import { CartAction, CartState } from "./types";

const initialState: CartState = {
  products: [],
};

const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const exists = state.products.some((product) => product.id === action.payload.id);

      if (exists) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
          ),
        };
      }

      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };

    case CartActionTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product
          )
          .filter((product) => product.quantity > 0),
      };

    case CartActionTypes.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
