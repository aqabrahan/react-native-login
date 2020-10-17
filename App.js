import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './src/menus/menu';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App;