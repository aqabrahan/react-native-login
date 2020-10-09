import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import CreateAccountScreen from './src/screens/CreateAccount';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountScreen,
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppNavigator);

