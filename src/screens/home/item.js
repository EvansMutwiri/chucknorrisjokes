import {Text, StyleSheet, RefreshControl} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import React from 'react';
import {
  VStack,
  Box,
  FlatList,
  HStack,
  Switch,
  Toast,
  Pressable,
} from 'native-base';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const URL = 'http://api.icndb.com/jokes/random/15?limitTo=[nerdy,explicit]';

const Item = () => {
  //initial state is empty array

  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const fetchData = async URL => {
    try {
      console.log('Trying to fetch');
      setRefreshing(true);
      setLoading(true);
      const response = await fetch(URL);
      // const json = await response.json();
      setData(json);
      // console.log('The response', response);
      const json = await response.json();
      // console.log('Finally the json', json);
      // setData(json);

      //async storage
      try {
        await AsyncStorage.setItem('data', JSON.stringify(json));
        console.log('Saved to async storage');
      } catch (error) {
        console.log('Error saving data', error);
      }

      // setData(AsyncStorage.getItem('data'));
      setRefreshing(false);
    } catch (err) {
      Toast.show({
        title: err.message,
        duration: 3000,
      });
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    fetchData('http://api.icndb.com/jokes/random/15?limitTo=[nerdy]');
  };

  const fetchTotal = async URL => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setTotal(json.value);
    } catch (err) {
      Toast.show({
        title: err.message,
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchData('http://api.icndb.com/jokes/random/15?limitTo=[nerdy]');
    fetchTotal('http://api.icndb.com/jokes/count');

    //get item from async storage
    let getItem = async () => {
      try {
        const value = await AsyncStorage.getItem('data');
        if (value !== null) {
          setData(JSON.parse(value));
          setLoading(false);
          setRefreshing(false);
        }
      } catch (error) {
        console.log('Error getting data', error);
        setRefreshing(false);
      }
    };
    getItem();
  }, []);

  const toggleExplicit = () => {
    setIsChecked(!isChecked);
    setRefreshing(true);
    setLoading(true);

    fetchData(
      'http://api.icndb.com/jokes/random/15?limitTo=' +
        (isChecked ? '[nerdy]' : '[nerdy, explicit]'),
    );
    if (isChecked) {
      NetInfo.fetch().then(state => {
        //if network is connected fetch from api else alert message
        if (state.isConnected) {
          fetchData(
            'http://api.icndb.com/jokes/random/15?limitTo=[nerdy]',
          ).then(() => {
            setRefreshing(false);
            setLoading(false);

            setData(data);
          });
        } else {
          Toast.show({
            title: 'No internet connection',
            duration: 3000,
          });
          setRefreshing(false);
          setLoading(false);
        }
      });
    } else {
      fetchData(
        'http://api.icndb.com/jokes/random/15?limitTo=[explicit, nerdy]',
      )
        .then(() => {
          setRefreshing(false);
          setLoading(false);

          // setData(AsyncStorage.getItem('data'));
          // setData(JSON.parse(AsyncStorage.getItem('data')));
        })
        .finally(() => {
          setRefreshing(false);
          setLoading(false);
        });
    }
  };

  return (
    <VStack>
      <HStack space={3} justifyContent="space-between" p={4}>
        <Text style={styles.content}>Count: {total}</Text>
        <Text style={styles.content}>Explicit Content</Text>
        <Switch onChange={toggleExplicit} />
      </HStack>
      <FlatList
        showsVerticalScrollIndicator={false}
        // refresh control
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        data={data}
        renderItem={({item}) => (
          <Box width="100%" marginY={2}>
            <Pressable>
              {({isHovered, isFocused, isPressed}) => {
                return (
                  <Box
                    shadow="3"
                    bg={
                      isPressed ? '#A2D4EC' : isHovered ? '#A2D4EC' : '#C5E4F3'
                    }
                    p="5"
                    rounded="8"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}>
                    <Text
                      color="#005885"
                      mt="3"
                      fontWeight="medium"
                      fontSize="xl">
                      Category: {item.categories}
                    </Text>
                    <Text
                      mt="2"
                      fontSize="xl"
                      p="4"
                      color="#006BA1"
                      style={styles.content}>
                      {item.joke}
                    </Text>
                  </Box>
                );
              }}
            </Pressable>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: '#D1E1D4',
    paddingVertical: 4,
    elevation: 2,
  },
  content: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 32,
    color: '#000',
    textAlign: 'center',
    letterSpacing: 1,
  },
  categories: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default Item;
