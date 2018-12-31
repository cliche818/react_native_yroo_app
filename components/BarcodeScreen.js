import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BarCodeScanner, Permissions, WebBrowser } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class BarcodeScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  renderBarCodeScanner = () => {
    return (
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
    )
  }

  renderScannedScreen = () => {
    return (
      <View style={styles.container}>
        <Text>This is just the home screen, does nothing</Text>
      </View>
    )
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.scanned ? this.renderScannedScreen() : this.renderBarCodeScanner()
        }

      </View>
    );
  }

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({ scanned: true });
    alert('Looking for result');
    let response = await fetch(`https://yroo.com/api/identifiers/upc/${data}`);
    let json = await response.json();

    let resultUrl = json.resultUrl
    if (resultUrl) {
      await WebBrowser.openBrowserAsync(resultUrl);
    } else {
      alert(`debug info: ${JSON.stringify(json)}. Nothing found with type ${type} and data ${data}!`);
    }

    this.setState({ scanned: false});
  }
}
