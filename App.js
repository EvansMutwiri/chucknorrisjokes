import {SafeAreaView, StyleSheet, Image} from 'react-native';
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
      <Image
        style={styles.img}
        source={require('./src/static/img/chuck-norris.png')}
      />
      <Image source={require('./src/static/img/APPROVED.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  splash: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
});
