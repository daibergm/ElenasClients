import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ClientsStackParamList = {
  LOGIN: undefined;
  CLIENTS: undefined;
  CLIENT: { clientId?: number };
};

export type ClientNavigationProps = StackNavigationProp<
  ClientsStackParamList,
  'CLIENT'
>;

export type ClientRouteProps = RouteProp<ClientsStackParamList, 'CLIENT'>;
