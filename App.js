import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {moveToHomeScreen} from './src/navigation';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      moveToHomeScreen();
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Splash</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCDCDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
