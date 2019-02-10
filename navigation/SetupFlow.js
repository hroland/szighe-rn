import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ClassSetup from '../screens/ClassSetup';
import PushSetup from '../screens/PushSetup'; 

export default createSwitchNavigator(
	{ ClassSetup, PushSetup }, { initialRouteName: 'ClassSetup' }
);