//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/images/login_panel.jpg")} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

//make this component available to the app
export default Splash;
