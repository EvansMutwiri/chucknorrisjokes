import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  VStack,
  Box,
  Divider,
  FlatList,
  HStack,
  Switch,
  Toast,
  v3CompatibleTheme,
  Select,
  Pressable,
} from 'native-base';
import {useEffect, useState} from 'react';
import Floating from '../random';

// const URL = 'http://api.icndb.com/jokes/random/15?limitTo=[nerdy,explicit]';

const Item = () => {
  //initial state is empty array

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  //selector example
  const [language, setLanguage] = useState('key0');
  const [languages, setLanguages] = useState(['ENGLISH', 'SWAHILI', 'KIKUYU']);

  const fetchData = async URL => {
    try {
      console.log('Trying to fetch');
      setRefreshing(true);
      setLoading(true);
      const response = await fetch(URL);
      console.log('The response', response);
      const json = await response.json();
      console.log('Finally the json', json);
      setData(json);
      setRefreshing(false);
    } catch (err) {
      Toast.show({
        title: err.message,
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchData('http://api.icndb.com/jokes/random/15?limitTo=[nerdy]');
  }, []);

  const toggleExplicit = () => {
    setIsChecked(!isChecked);
    setRefreshing(true);
    setLoading(true);

    fetchData(
      'http://api.icndb.com/jokes/random/15?limitTo=' +
        (isChecked ? '[nerdy]' : '[nerdy, explicit]'),
    );
  };

  return (
    <VStack>
      <HStack space={3} justifyContent="space-between" p={4}>
        <Text style={styles.content}>Explicit Content</Text>
        <Switch onChange={toggleExplicit} />
      </HStack>
      {/* <Select
        placeholder="Mode of payment"
        selectedValue={language}
        width={150}
        onValueChange={itemValue => setLanguage(itemValue)}>
        <Select.Item selectedValue label="ONE" value="key0" />
        {languages.map(language => (
          <Select.Item label={language} value={language} />
        ))}
      </Select> */}
      <FlatList
        // refresh control
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
        data={data.value}
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
