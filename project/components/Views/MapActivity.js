//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
// create a component
class MapActivity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            title={"test"}
            description={"test"}
          />
        </MapView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute"
  }
});

//make this component available to the app
export default MapActivity;
