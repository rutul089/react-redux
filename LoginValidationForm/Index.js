//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoginForm from "./LoginForm/LoginForm";
import { Content } from "native-base";

// create a component
class Index extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Content style={styles.container}>
        <View
          style={{
            padding: 10,
            marginTop: 10,
            alignItems: "center"
          }}
        >
          <Image
            source={require("../project/assets/images/login_panel.jpg")}
            style={{
              resizeMode: "contain"
            }}
          />
        </View>
        <LoginForm />
      </Content>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

//make this component available to the app
export default Index;
