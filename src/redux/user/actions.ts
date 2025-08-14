import { User } from "../../types/user";
import { UserActionTypes } from "./action-types";
import { LoginUserAction, LogoutUserAction } from "./types";

export const loginUser = (payload: User): LoginUserAction => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logoutUser = (): LogoutUserAction => ({
  type: UserActionTypes.LOGOUT,
});
