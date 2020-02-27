import React, {Component} from 'react';
import {
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity,
        Platform,
        Button,
        Dimensions
      } from 'react-native'

import Supertext from "./src/widgets/supertext"
import DeviceInfo from 'react-native-device-info'

class App extends Component {
  
  checkSupport = () => {
    if (Platform.OS === "ios") {
      if (Platform.Version > 12.1) {
        return false;
      }
    } else {
      if (Platform.Version > 28) {
        return false;
      }
    }
    return true;
  }

  render() {
    DeviceInfo.isLandscape().then(isLandscape => {
        // true
      console.warn(isLandscape)
    })
    return (
      <View style={styles.container}>
        {
          this.checkSupport() ?
              <Supertext
                style={styles.rogue}
              >
                {Platform.OS === "ios"
                  ? "Welcome to your iOS app"
                  : "Your Andorid is awesome."}
              </Supertext> :
              <Text>Sorry, not supported by a new phone.</Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  rogue: {
    ...Platform.select({
      ios: {
        backgroundColor: "red"
      },
      android: {
        backgroundColor: "blue"
      }
    })
  }
});

export default App