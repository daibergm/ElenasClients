/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';

import Root from './src/screens/RootScreen';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Root);
