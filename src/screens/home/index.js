import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Box, HStack} from 'native-base';
import Item from './item';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../utils/styles/theme';
import Floating from '../random';

const home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AppBar />
      <SafeAreaView style={styles.container}>
        <Box p={4} contentContainerStyle={{paddingVertical: 50}}>
          <Item />
          <Floating />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const menuIcon = (
  <TouchableOpacity>
    <Icon name="md-menu" color="#000" size={25} />
  </TouchableOpacity>
);
const AppBar = () => (
  <SafeAreaView>
    <Box safeAreaTop bg="#BCDCDA" />
    <HStack
      bg="#BCDCDA"
      px="6"
      py="6"
      justifyContent="space-between"
      alignItems="center"
      elevation={4}
      w="100%">
      {menuIcon}
      <HStack alignItems="center">
        <Text style={styles.title}>Home</Text>
      </HStack>
      <HStack />
    </HStack>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    fontSize: 24,
    fontWeight: 'normal',
  },
});

export default home;
