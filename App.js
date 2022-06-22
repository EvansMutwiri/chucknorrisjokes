import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return <SafeAreaView style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
