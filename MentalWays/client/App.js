// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Chatbot } from 'react-simple-chatbot';

const steps = [
  {
    id: '1',
    message: 'Welcome to the chatbot! How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'You said "{{previousValue}}". Thanks for your message!',
    end: true,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={{}}>
        <Chatbot
          steps={steps}
          width={'100%'}
          height={'100%'}
          floating={true}
          opened={true}
          toggleFloating={false}
        />
      </ThemeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export default App