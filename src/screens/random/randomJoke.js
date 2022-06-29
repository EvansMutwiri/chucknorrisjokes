import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Provider as PaperProvider, Surface, Appbar} from 'react-native-paper';
import {moveToHomeScreen} from '../../navigation';
import {useEffect, useState} from 'react';
// import {fetchData} from '../../utils/fetchData';
import {NativeBaseProvider, ScrollView} from 'native-base';
import {Toast} from 'native-base';

const RandomJoke = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async URL => {
    try {
      setRefreshing(true);
      setLoading(true);
      const response = await fetch(URL);

      const json = await response.json();

      const value = json.value;

      setData(value);

      setRefreshing(false);
    } catch (err) {
      Toast.show({
        title: err.message,
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchData('http://api.icndb.com/jokes/random');
  }, []);
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <Appbar.Header style={styles.top}>
          <Appbar.BackAction onPress={moveToHomeScreen} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <TouchableOpacity style={styles.surface}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.id}>{data.id}</Text>
            <Text style={styles.text}>"{data.joke}"</Text>
          </ScrollView>
        </TouchableOpacity>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

export default RandomJoke;

const styles = StyleSheet.create({
  surface: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#E3F2F9',
  },
  text: {
    color: '#3F51B5',
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  id: {
    color: 'gray',
    fontSize: 60,
    lineHeight: 60,
    paddingHorizontal: 40,
    fontWeight: '100',
  },
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E3F2F9',
    paddingVertical: 60,
    paddingHorizontal: 20,
    textAlignVertical: 'center',
  },
  top: {
    backgroundColor: '#E3F2F9',
    elevation: 4,
    margin: 0,
  },
});
