export enum ActionTypes {
  LOGIN_ATTEMPT = '@ACCOUNT_LOGIN_ATTEMPT',
  LOGIN_SUCCESS = '@ACCOUNT_LOGIN_SUCCESS',
  LOGIN_FAILURE = '@ACCOUNT_LOGIN_FAILURE',
  LOGOUT = '@ACCOUNT_LOGOUT',
}

export type Action = {
  type:
    | ActionTypes.LOGIN_ATTEMPT
    | ActionTypes.LOGIN_SUCCESS
    | ActionTypes.LOGIN_FAILURE
    | ActionTypes.LOGOUT;
  payload?: string;
};
