import { createContext, Context } from 'react';

// @Types
import { User, Login } from '../../types/user';

export type State = {
  user?: User;
  isAuthenticated?: boolean;
  isLoading?: boolean;
  onLogin?: (data: Login) => void;
  onLogout?: () => void;
};

export const initialState: State = {};

const accountContext: Context<State> = createContext(initialState);

export default accountContext;
