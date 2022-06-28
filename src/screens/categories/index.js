import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Pressable,
  Box,
  HStack,
  Badge,
  Spacer,
  Flex,
  NativeBaseProvider,
  v3CompatibleTheme,
} from 'native-base';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();
  // const categories = useSelector(state => state.categories);
  const [selected, setSelected] = useState('');
  const [categoriesList, setCategories] = useState(false);
  return (
    <NativeBaseProvider theme={v3CompatibleTheme}>
      {/* <Box alignItems="center">
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <Box
                maxW="96"
                borderWidth="1"
                borderColor="#7AC1E4"
                shadow="3"
                bg={isPressed ? '#A2D4EC' : isHovered ? '#A2D4EC' : '#C5E4F3'}
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}>
                <Text color="#005885" mt="3" fontWeight="medium" fontSize="xl">
                  Marketing License
                </Text>
                <Text mt="2" fontSize="sm" color="#006BA1">
                  Unlock powerfull time-saving tools for creating email delivery
                  and collecting marketing data
                </Text>
              </Box>
            );
          }}
        </Pressable>
      </Box> */}
    </NativeBaseProvider>
  );
};

export default Categories;

const styles = StyleSheet.create({});
