import React, { useReducer, useEffect } from 'react';
import { isEmpty } from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

// @Context
import AccountContext, { initialState } from './Context';
import accountReducer from './reducer';
import { ActionTypes } from './types';

// @types
import { Login } from '../../types/user';

// @constants
import { STORAGE_SESSION_KEY } from '../../constants/';

const TEMP_LOGIN_DATA = {
  firstName: 'John',
  lastName: 'Doe',
  DNI: '1234567890',
  email: 'johndoe@gmail.com',
};

type Props = {
  children: JSX.Element;
};

const AccountState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  useEffect(() => {
    const validateSession = async () => {
      dispatch({ type: ActionTypes.LOGIN_ATTEMPT });
      const session = await AsyncStorage.getItem(STORAGE_SESSION_KEY);

      if (session) {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: JSON.parse(session),
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
      const rs = await Promise.resolve({
        ...TEMP_LOGIN_DATA,
        cellphone: data.cellphone,
      });

      if (!isEmpty(rs)) {
        await AsyncStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(rs));

        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: rs,
        });

        return;
      }

      dispatch({ type: ActionTypes.LOGIN_FAILURE });
    }
  };

  /**
   * Use to delete session in the app
   */
  const onLogout = async (): Promise<void> => {
    await Promise.resolve();
    dispatch({ type: ActionTypes.LOGOUT });
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
