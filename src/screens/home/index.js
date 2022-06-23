import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider, Box, Button} from 'native-base';

const home = () => {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Box alignItems="center">
        <Button onPress={() => console.log('hello world')}>Click Me</Button>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default home;
