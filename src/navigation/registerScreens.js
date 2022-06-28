import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Home from '../../src/screens/home/index';
import Random from '../../src/screens/random/randomJoke';

export const registerScreens = () => {
  Navigation.registerComponent('App', () => App);

  Navigation.registerComponent('Home', () => Home);

  Navigation.registerComponent('Random', () => Random);
};
