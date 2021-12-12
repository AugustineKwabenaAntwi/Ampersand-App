import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/components/WelcomeScreen';
import WelcomeScreen2 from './src/components/WelcomeScreen2';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
