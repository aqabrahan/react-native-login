import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Resume from '../screens/Resume';
import Login from '../screens/Login';
import SignUp from '../screens/CreateAccount';
import ResetPassword from '../screens/ResetPassword';

import User from './user';

const Drawer = createDrawerNavigator();

const menu = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)
  return (
    <Drawer.Navigator>
      {!isSignedIn &&
        <>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Sign Up" component={SignUp} />
          <Drawer.Screen name="Reset Password" component={ResetPassword} />
        </>
      }
      {isSignedIn && <Drawer.Screen name="Home" component={User} />}

      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Resume" component={Resume} />
    </Drawer.Navigator>
  )
}

export default menu;