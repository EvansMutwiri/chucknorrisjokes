import {registerScreens} from './registerScreens';
import {Navigation} from 'react-native-navigation';

const setAppDefaultOptions = () =>
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 1,
      backgroundColor: '#fff',
      leftButtonColor: 'black',
      barStyle: 'default',
      noBorder: true,
      background: {
        color: '#fff',
        translucent: true,
        blur: false,
      },
      backButton: {
        color: '#000',
        visible: true,
      },
    },
    header: {visible: false},
    statusBar: {
      backgroundColor: '#fff',
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
  });

export const goToAppRootInitializer = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setAppDefaultOptions();
    Navigation.setRoot({
      root: {
        stack: {
          id: 'App',
          children: [
            {
              component: {
                name: 'App',
              },
            },
          ],
          options: {
            topBar: {
              visible: false,
              height: 0,
            },
          },
        },
      },
    });
  });
};

export function moveToHomeScreen() {
  registerScreens();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Home',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            height: 0,
            title: {
              text: 'Home',
              alignment: 'center',
              color: '#000',
            },
            background: {
              color: '#BCDCDA',
              translucent: true,
              blur: false,
            },
          },
        },
      },
    },
  });
}

export function moveToRandomScreen() {
  registerScreens();
  Navigation.push('Home', {
    component: {
      name: 'Random',
    },
  });
}

export function moveToCategoriesScreen() {
  registerScreens();
  Navigation.push('Home', {
    component: {
      name: 'Categories',
    },
  });
}
