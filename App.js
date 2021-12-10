import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/components/WelcomeScreen';
import WelcomeScreen2 from './src/components/WelcomeScreen2';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
