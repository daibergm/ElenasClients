import React from 'react';

// @Screens
import { AppScreen } from './App/';

// @Context
import { AccountState } from '../context/';

const RootScreen = () => {
  return (
    <AccountState>
      <AppScreen />
    </AccountState>
  );
};

export default RootScreen;
