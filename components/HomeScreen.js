import React from 'react';
import { StyleSheet, WebView } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://yroo.com'}}
        style={{marginTop: 20}}
      />
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
