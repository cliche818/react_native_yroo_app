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
