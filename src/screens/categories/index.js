import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  NativeBaseProvider,
  Toast,
  v3CompatibleTheme,
  Select,
  FlatList,
  Box,
  Pressable,
} from 'native-base';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import {moveToHomeScreen} from '../../navigation';
import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';

const Categories = () => {
  //   const dispatch = useDispatch();
  // const categories = useSelector(state => state.categories);
  const [selected, setSelected] = useState('');
  const [categories, setCategoriesList] = useState([]);
  const [jokes, setJokes] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://api.icndb.com/categories');
      const json = await response.json();
      setCategoriesList(json.value);
    } catch (err) {
      console.log(err);
      Toast.show({
        title: err.message,
        duration: 3000,
      });
    }
  };

  const fetchByCategory = async itemValue => {
    setSelected(itemValue);
    try {
      const response = await fetch(
        `http://api.icndb.com/jokes/random/8?limitTo=[${itemValue}]`,
      );
      const json = await response.json();
      setJokes(json.value);
    } catch (err) {
      console.log(err);
      Toast.show({
        title: err.message,
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <NativeBaseProvider>
      <PaperProvider>
        <Appbar.Header style={styles.top}>
          <Appbar.BackAction onPress={moveToHomeScreen} />
          <Appbar.Content title={selected ? selected : 'Categories'} />
        </Appbar.Header>

        <SafeAreaView style={styles.container}>
          {/* <Text style={styles.title}>Showing jokes from {selected}</Text> */}
          <Select
            placeholder="Pick a category"
            backgroundColor="#A2D4EC"
            selectedValue={selected}
            fontSize={18}
            width="90%"
            marginY={2}
            onValueChange={itemValue => fetchByCategory(itemValue)}>
            {categories.map(category => (
              <Select.Item label={category} value={category} />
            ))}
          </Select>
          <FlatList
            marginX={2}
            showsVerticalScrollIndicator={false}
            data={jokes}
            renderItem={({item}) => (
              <Box width="100%" marginY={2}>
                <Pressable>
                  {({isHovered, isFocused, isPressed}) => {
                    return (
                      <Box
                        shadow="3"
                        bg={
                          isPressed
                            ? '#A2D4EC'
                            : isHovered
                            ? '#A2D4EC'
                            : '#C5E4F3'
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
                          Id: {item.id}
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
        </SafeAreaView>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

export default Categories;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: '#005885',
  },
  top: {
    backgroundColor: '#E3F2F9',
    elevation: 4,
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#E3F2F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
