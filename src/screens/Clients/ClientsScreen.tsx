import React, { useContext, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

// @Context
import { AccountContext } from '../../context/';

// @Styles
import styles from './styles';

function ClientsScreen() {
  // TODO: Remove when implement drawer navigator
  const { onLogout } = useContext(AccountContext);

  // TODO: Remove when implement drawer navigator
  useEffect(() => {
    setTimeout(() => {
      onLogout && onLogout();
    }, 2000);
  }, [onLogout]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Lista de clientes</Text>
    </SafeAreaView>
  );
}

export default ClientsScreen;
