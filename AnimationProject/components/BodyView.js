//import liraries
import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder
} from "react-native";

import { Text } from "native-base";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
// create a component
const BodyView = ({ uri, desc }) => {
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "white"
      }}
    >
      <View style={{ flex: 2, backgroundColor: "black" }}>
        <Image
          source={uri}
          style={{
            flex: 1,
            height: null,
            width: null,
            resizeMode: "center"
          }}
        />
      </View>
      <View style={{ flex: 3, padding: 5 }}>
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default BodyView;
