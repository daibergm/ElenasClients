import { createContext, Context } from 'react';

// @Types
import { Login } from '../../types/user';

export type State = {
  token?: string;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  error?: string;
  onLogin?: (data: Login) => void;
  onLogout?: () => void;
};

export const initialState: State = {};

const accountContext: Context<State> = createContext(initialState);

export default accountContext;
