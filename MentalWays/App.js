import React from 'react';
import CustomDrawer from './CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native';
import {NewConversationsDataProvider} from './conversationsContext'

const App = () => {
  I18nManager.forceRTL(true);
  return (
    <NewConversationsDataProvider>
      <NavigationContainer>
        <CustomDrawer />
      </NavigationContainer>
    </NewConversationsDataProvider>
  );
};

export default App;