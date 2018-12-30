import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
//

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import BarcodeScreen from './components/BarcodeScreen';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: BarcodeScreen },
});

export default createAppContainer(TabNavigator);
