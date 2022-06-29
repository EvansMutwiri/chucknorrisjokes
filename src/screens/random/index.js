import {StyleSheet} from 'react-native';
import React from 'react';
import {Provider as PaperProvider, FAB} from 'react-native-paper';
import {moveToRandomScreen} from '../../navigation';
import NetInfo from '@react-native-community/netinfo';
import {Toast} from 'native-base';

const Floating = () => {
  return (
    <PaperProvider>
      <FAB
        icon="shuffle"
        color="#fff"
        style={styles.fab}
        mode="flat"
        variant="tertiary"
        size="large"
        onPress={() => {
          //   console.log('Pressed');

          NetInfo.fetch().then(state => {
            if (state.isConnected) {
              moveToRandomScreen();
            } else {
              Toast.show({
                title: 'No internet connection',
                duration: 3000,
              });
              return;
            }
          });
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
    backgroundColor: '#d97706',
    elevation: 4,
  },
});
