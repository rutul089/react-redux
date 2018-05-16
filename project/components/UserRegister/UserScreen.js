import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../reducer/index";
import firebase from "firebase";
import LoginForm from "./LoginForm";
import Register from "./Register";

// create a component
class UserScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyALlmO4gPaXb_J3fhSeSiaW9DYhsiTAyes",
      authDomain: "librarys-f6eac.firebaseapp.com",
      databaseURL: "https://librarys-f6eac.firebaseio.com",
      projectId: "librarys-f6eac",
      storageBucket: "",
      messagingSenderId: "780966731984"
    };
    firebase.initializeApp(config);
  }



  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <LoginForm />
      </Provider>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2"
  }
});

export default UserScreen;
