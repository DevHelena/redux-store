export const UserActionTypes = {
  LOGIN: "user/login",
  LOGOUT: "user/logout",
} as const;

export type UserActionType =
  typeof UserActionTypes[keyof typeof UserActionTypes];
