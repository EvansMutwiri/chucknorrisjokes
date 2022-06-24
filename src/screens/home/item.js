import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {VStack, Box, Divider, FlatList} from 'native-base';

const Item = () => {
  const data = {
    type: 'success',
    value: [
      {
        id: 523,
        joke: 'Chuck Norris can win in a game of Russian roulette with a fully loaded gun.',
        categories: [],
      },
      {
        id: 369,
        joke: "A movie scene depicting Chuck Norris losing a fight with Bruce Lee was the product of history's most expensive visual effect. When adjusted for inflation, the effect cost more than the Gross National Product of Paraguay.",
        categories: [],
      },
      {
        id: 16,
        joke: 'Pluto is actually an orbiting group of British soldiers from the American Revolution who entered space after the Chuck gave them a roundhouse kick to the face.',
        categories: [],
      },
      {
        id: 164,
        joke: 'Chuck Norris once sued Burger King after they refused to put razor wire in his Whopper Jr, insisting that that actually is &quot;his&quot; way.',
        categories: [],
      },
      {
        id: 487,
        joke: 'No statement can catch the ChuckNorrisException.',
        categories: ['nerdy'],
      },
      {
        id: 74,
        joke: "In honor of Chuck Norris, all McDonald's in Texas have an even larger size than the super-size. When ordering, just ask to be Chucksized.",
        categories: [],
      },
      {
        id: 473,
        joke: 'Chuck Norris can overflow your stack just by looking at it.',
        categories: ['nerdy'],
      },
      {
        id: 29,
        joke: 'Teenage Mutant Ninja Turtles is based on a true story: Chuck Norris once swallowed a turtle whole, and when he crapped it out, the turtle was six feet tall and had learned karate.',
        categories: [],
      },
      {
        id: 133,
        joke: "Chuck Norris doesn't stub his toes. He accidentally destroys chairs, bedframes, and sidewalks.",
        categories: [],
      },
      {
        id: 450,
        joke: "Chuck Norris doesn't have disk latency because the hard drive knows to hurry the hell up.",
        categories: ['nerdy'],
      },
      {
        id: 50,
        joke: "Chuck Norris invented Kentucky Fried Chicken's famous secret recipe with eleven herbs and spices. Nobody ever mentions the twelfth ingredient: Fear.",
        categories: [],
      },
      {
        id: 494,
        joke: 'Chuck Norris breaks RSA 128-bit encrypted codes in milliseconds.',
        categories: ['nerdy'],
      },
      {
        id: 193,
        joke: "Most boots are made for walkin'. Chuck Norris' boots ain't that merciful.",
        categories: [],
      },
      {
        id: 457,
        joke: "MySpace actually isn't your space, it's Chuck's (he just lets you use it).",
        categories: ['nerdy'],
      },
      {
        id: 43,
        joke: 'Police label anyone attacking Chuck Norris as a Code 45-11.... A suicide.',
        categories: [],
      },
    ],
  };
  return (
    <FlatList
      data={data.value}
      renderItem={({item, index}) => (
        <Box>
          <Box border="1" borderRadius="xl" marginY={2} style={styles.first}>
            <VStack space="4" divider={<Divider />}>
              <Box px="4" pt="4" style={styles.content}>
                NativeBase
              </Box>
              <Box px="4">
                <Text style={styles.content}>{item.joke}</Text>
              </Box>
              <Box px="4" pb="4">
                <Text>{item.id}</Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: '#D1E1D4',
  },
  content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Item;
