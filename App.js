import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import BarcodeScreen from './components/BarcodeScreen';
import IconWithBadge from './components/IconWithBadge';
import { Ionicons } from '@expo/vector-icons';

// const HomeIconWithBadge = props => {
//   // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
//   return <IconWithBadge {...props} badgeCount={10} />;
// };

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

export default createAppContainer(TabNavigator);
