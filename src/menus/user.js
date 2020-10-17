import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home2 from '../screens/Home2';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const User = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home2"
    >
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default User;