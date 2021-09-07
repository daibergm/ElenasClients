import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';

// @Context
import { AccountContext } from '../../context/';

// @types
import { Login } from '../../types/user';

// @Components
import { LoginComponent } from '../../components/';

// @Styles
import styles from './styles';

function LoginScreen() {
  const { onLogin, isLoading } = useContext(AccountContext);

  const onSubmit = async (data: Login) => onLogin && onLogin(data);

  return (
    <SafeAreaView style={styles.container}>
      <LoginComponent submitFunction={onSubmit} loading={!!isLoading} />
    </SafeAreaView>
  );
}

export default LoginScreen;
