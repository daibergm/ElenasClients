import React from 'react';
import { SafeAreaView, Text } from 'react-native';

// @Styles
import styles from './styles';

function ClientsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Lista de clientes</Text>
    </SafeAreaView>
  );
}

export default ClientsScreen;
