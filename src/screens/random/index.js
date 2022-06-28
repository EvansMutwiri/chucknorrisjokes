import {StyleSheet} from 'react-native';
import React from 'react';
import {Provider as PaperProvider, FAB} from 'react-native-paper';

const Floating = () => {
  return (
    <PaperProvider>
      <FAB
        icon="shuffle"
        style={styles.fab}
        elevation={1}
        onPress={() => {
          console.log('Pressed');
        }}
      />
    </PaperProvider>
  );
};

export default Floating;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#3F51B5',
    elevation: 4,
  },
});
