import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is just the home screen, does nothing</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen