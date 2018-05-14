//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

// create a component
const HeaderComponents = props => {
  return (
    <View style={[styles.viewStyle, props.style]}>
      <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",

    height: Platform.OS === "ios" ? 34 : 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  }
});

//make this component available to the app
export { HeaderComponents };
