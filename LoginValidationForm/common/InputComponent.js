//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// create a component
const InputComponent = props => {
  /**
   * here type is same type we passed in login form
   */
  let template = null;
  switch (props.type) {
    case "textInput":
      template = (
        <TextInput
          underlineColorAndroid="transparent"
          {...props}
          style={[styles.input, props.overrideStyle]}
        />
      );

      break;
    default:
      return template;
      break;
  }
  return template;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  input: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#eaeaea",
    fontSize: 18,
    padding: 5,
    marginTop: 10
  }
});

//make this component available to the app
export default InputComponent;
