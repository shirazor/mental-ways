import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatScreen from './ChatScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;