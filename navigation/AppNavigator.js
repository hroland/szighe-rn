import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
	Main: createStackNavigator({ SplashScreen, ClassSetup, PushSetup }, { initialRouteName: 'SplashScreen' })
}));