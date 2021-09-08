// @Context
import { initialState, State } from './Context';
import { Action, ActionTypes } from './types';

const accountReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_ATTEMPT: {
      const newState: State = {
        ...state,
        isLoading: true,
      };

      return newState;
    }

    case ActionTypes.LOGIN_SUCCESS: {
      const newState: State = {
        ...state,
        token: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };

      return newState;
    }

    case ActionTypes.LOGIN_FAILURE: {
      const newState: State = {
        ...initialState,
        error: action.payload,
      };

      return newState;
    }

    case ActionTypes.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default accountReducer;
