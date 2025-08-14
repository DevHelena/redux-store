import { User } from "../../types/user";
import { UserActionTypes } from "./action-types";

export type UserState = {
  currentUser: User | null;
};

export type LoginUserAction = {
  type: typeof UserActionTypes.LOGIN;
  payload: User;
};

export type LogoutUserAction = {
  type: typeof UserActionTypes.LOGOUT;
};

export type UserAction = LoginUserAction | LogoutUserAction;
