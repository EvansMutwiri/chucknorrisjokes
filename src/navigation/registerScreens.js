import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Home from '../../src/screens/home/index';

export const registerScreens = () => {
  Navigation.registerComponent('App', () => App);

  Navigation.registerComponent('Home', () => Home);
};
