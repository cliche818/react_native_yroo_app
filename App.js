import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Notifications } from 'expo';
import HomeScreen from './components/HomeScreen';
import BarcodeScreen from './components/BarcodeScreen';
import IconWithBadge from './components/IconWithBadge';
import { Ionicons } from '@expo/vector-icons';

// const HomeIconWithBadge = props => {
//   // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
//   return <IconWithBadge {...props} badgeCount={10} />;
// };

import registerForPushNotificationsAsync from './components/PushNotification';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    return <IconWithBadge name={iconName} size={25} color={tintColor} badgeCount={10}/>;
  } else if (routeName === 'BarcodeScanner') {
    iconName = 'ios-camera'; //`${focused ? 'camera' : 'camera-off'}`;
    return <IconWithBadge name={iconName} size={25} color={tintColor} />;
  }

  // You can return any component that you like here!
};

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  BarcodeScanner: { screen: BarcodeScreen },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component {
  componentDidMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    console.log('notification origin: ', notification.origin);
    console.log('notification data', notification.data);
  };

  render() {
    return <AppContainer />;
  }
}
