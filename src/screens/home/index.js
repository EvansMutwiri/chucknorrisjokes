import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Box, Switch, HStack, Icon} from 'native-base';
import Item from './item';

import {theme} from '../../utils/styles/theme';

const home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AppBar />
      <SafeAreaView>
        <Toggler />
        <Box p={4}>
          <Item />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const AppBar = () => (
  <>
    <Box safeAreaTop bg="#BCDCDA" />
    <HStack
      bg="#BCDCDA"
      px="0"
      py="6"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      {/* @TODO: Add nav drawer icon */}
      <Icon />
      <HStack alignItems="center">
        <Text style={styles.title}>Home</Text>
      </HStack>
      <HStack />
    </HStack>
  </>
);

function Toggler() {
  return (
    <HStack space={3} justifyContent="space-between" p={4}>
      <Text style={styles.content}>Explicit Content</Text>
      <Switch size="sm" />
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'normal',
    color: '#fff',
  },
  content: {
    fontSize: 24,
    fontWeight: 'normal',
  },
});

export default home;
