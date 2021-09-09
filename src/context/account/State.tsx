import React, { useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, gql } from '@apollo/client';

// @Context
import AccountContext, { initialState } from './Context';
import accountReducer from './reducer';
import { ActionTypes } from './types';

// @types
import { Login } from '../../types/user';

// @constants
import { STORAGE_SESSION_KEY } from '../../constants/';

// @Mutations
const LOGIN_MUTATION = gql`
  mutation login($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      ... on AuthInfo {
        token
      }
    }
  }
`;

type Props = {
  children: JSX.Element;
};

const AccountState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const [login] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    const validateSession = async () => {
      dispatch({ type: ActionTypes.LOGIN_ATTEMPT });
      const session = await AsyncStorage.getItem(STORAGE_SESSION_KEY);

      if (session) {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: session,
        });
      } else {
        dispatch({ type: ActionTypes.LOGOUT });
      }
    };
    validateSession();
  }, []);

  /**
   * Use to login into the app
   * @param {Login} data Data to login
   */
  const onLogin = async (data: Login): Promise<void> => {
    if (!state.isLoading) {
      dispatch({ type: ActionTypes.LOGIN_ATTEMPT });

      try {
        const {
          data: {
            login: { token, __typename },
          },
        } = await login({ variables: data });

        if (token) {
          await AsyncStorage.setItem(STORAGE_SESSION_KEY, token);

          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: token,
          });

          return;
        }

        dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: __typename });
      } catch (error) {
        dispatch({
          type: ActionTypes.LOGIN_FAILURE,
          payload: 'LoginFailure',
        });
      }
    }
  };

  /**
   * Use to delete session in the app
   */
  const onLogout = async (): Promise<void> => {
    await Promise.resolve();
    dispatch({ type: ActionTypes.LOGOUT });
    await AsyncStorage.removeItem(STORAGE_SESSION_KEY);
  };

  return (
    <AccountContext.Provider
      value={{
        ...state,
        onLogin,
        onLogout,
      }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountState;
