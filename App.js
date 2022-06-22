import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {moveToHomeScreen} from './src/navigation';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      moveToHomeScreen();
    }, 6000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./src/static/img/ranger.png')} />
      <Text style={styles.splash}>Splash</Text>
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
  splash: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
