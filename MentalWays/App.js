import React from 'react';
import CustomDrawer from './CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native';

const App = () => {
  I18nManager.forceRTL(true);
  return (
    <NavigationContainer>
      <CustomDrawer />
    </NavigationContainer>
  );
};

export default App;