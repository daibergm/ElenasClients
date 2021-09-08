import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// @Screens
import { LoginScreen } from '../Login/';
import { ClientsScreen } from '../Clients/';
import { ClientScreen } from '../Client';

// @Context
import { AccountContext } from '../../context/';

// @Constants
import { LOGIN_ROUTE, CLIENTS_ROUTE, CLIENT_ROUTE } from '../../constants/';

// @Types
import { ClientsStackParamList } from '../../types/';

// Variables
const Stack = createStackNavigator<ClientsStackParamList>();

function AppScreen() {
  const { isAuthenticated } = useContext(AccountContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <>
          {!isAuthenticated && (
            <Stack.Navigator initialRouteName={LOGIN_ROUTE}>
              <Stack.Screen
                options={{ headerShown: false }}
                name={LOGIN_ROUTE}
                component={LoginScreen}
              />
            </Stack.Navigator>
          )}
          {isAuthenticated && (
            <Stack.Navigator initialRouteName={CLIENTS_ROUTE}>
              <Stack.Screen
                options={{ title: 'CLIENTES' }}
                name={CLIENTS_ROUTE}
                component={ClientsScreen}
              />
              <Stack.Screen name={CLIENT_ROUTE} component={ClientScreen} />
            </Stack.Navigator>
          )}
        </>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppScreen;
