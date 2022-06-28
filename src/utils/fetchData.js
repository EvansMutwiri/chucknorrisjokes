import {View, Text} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import {Toast} from 'native-base';

const FetchData = async URL => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
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

export default FetchData;
