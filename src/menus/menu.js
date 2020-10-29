import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Resume from '../screens/Resume';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/CreateAccount';
import ResetPassword from '../screens/ResetPassword';
import { getToken, setToken } from '../api/token';
import { login } from '../api/authentication';

import User from './user';
import AuthContext from '../context';
import Loading from '../components/loading';

const Drawer = createDrawerNavigator();

const menu = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            errorLogin: null,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            errorLogin: null,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            errorLogin: null,
          };
        case 'ERROR_LOGIN':
          return {
            ...prevState,
            isSignout: false,
            errorLogin: action.message,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      errorLogin: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = null;

      try {
        //userToken = await AsyncStorage.getItem('userToken');
        userToken = await getToken();
        console.log('restore token ---')
        console.log(userToken)
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (email, password) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        try {
          const data = await login(email, password);
          const { token } = data;
          await setToken(token);
          dispatch({ type: 'SIGN_IN', token });

        } catch (error) {
          console.log('message error login');
          const { message } = error;
          console.log(message);
          dispatch({ type: 'ERROR_LOGIN', message });
        }
      },
      signOut: async () => {
        await setToken('');
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      errorLogin: state.errorLogin,
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Drawer.Navigator>
        {state.isLoading ? (
          <Drawer.Screen name="Splash" component={Loading} />
        ) : state.userToken == null ?
            (
              <>
                <Drawer.Screen
                  name="Login"
                  component={Login}
                  options={{
                    title: 'Sign in',
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                />
                <Drawer.Screen name="Sign Up" component={SignUp} />
                <Drawer.Screen name="Reset Password" component={ResetPassword} />
              </>
            ) : (
              <Drawer.Screen name="Home" component={Home} />
            )
        }
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Resume" component={Resume} />
      </Drawer.Navigator>
    </AuthContext.Provider>
  )
}

export default menu;