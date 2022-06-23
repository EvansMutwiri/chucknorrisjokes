import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider, Box, Button} from 'native-base';

import {theme} from '../../utils/styles/theme';

const home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <View style={{display: 'flex'}}>
          <Box>Hello world</Box>
          <Box alignItems="center">
            <Button onPress={() => console.log('hello world')}>Click Me</Button>
          </Box>
        </View>
      </SafeAreaView>
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
