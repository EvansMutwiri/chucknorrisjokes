import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NativeBaseProvider, Box, HStack, Button} from 'native-base';
import Item from './item';
import {theme} from '../../utils/styles/theme';
import Floating from '../random';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import {moveToCategoriesScreen} from '../../navigation';

const home = () => {
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <Appbar.Header style={styles.top}>
          <Appbar.Content title="Home" />
          <Appbar.Action icon="apps" onPress={moveToCategoriesScreen} />
        </Appbar.Header>
        <SafeAreaView style={styles.container}>
          <Box p={4}>
            <Item />
            <Floating />
          </Box>
        </SafeAreaView>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E3F2F9',
  },
  content: {
    fontSize: 24,
    fontWeight: 'normal',
  },
  top: {
    backgroundColor: '#E3F2F9',
    elevation: 4,
    margin: 0,
  },
});

export default home;
