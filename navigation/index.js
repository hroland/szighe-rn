import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import ClassSetup from '../screens/ClassSetup';
import PushSetup from '../screens/PushSetup'; 
import HomeScreen from '../screens/HomeScreen'; 
import LoadingScreen from '../screens/LoadingScreen'; 

export const firstTimeFlow = createStackNavigator(
	{ SplashScreen, ClassSetup, PushSetup, LoadingScreen }, { initialRouteKey: 'SplashScreen', initialRouteParams: { firstTime: true } }
)

export const setupFlow = createStackNavigator(
	{ ClassSetup, PushSetup, LoadingScreen }, { initialRouteKey: 'SplashScreen', initialRouteParams: { firstTime: false } }
)

export const createRootNavigator = (firstTime) => createAppContainer(createSwitchNavigator({
	firstTimeFlow, HomeScreen, setupFlow
}, { initialRouteName: firstTime ? 'firstTimeFlow' : 'HomeScreen' }))