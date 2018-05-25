import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/index";
import firebase from "firebase";
import LoginForm from "./components/UserRegister/LoginForm";
import Register from "./components/UserRegister/Register";
import {
  createStackNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";
import UserScreen from "./components/UserRegister/UserScreen";
import HomeActivity from "./components/Views/HomeActivity";
import ProfileScreen from "./components/Views/ProfileScreen";
import MapActivity from "./components/Views/MapActivity";
import MenuView from "./components/Views/MenuView";
import MenuDetailActivity from "./components/Views/MenuDetailActivity";

export default class App extends Component {
  render() {
    let { intl } = this.context;
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator({
  LoginForm: LoginForm,
  UserScreen: UserScreen,
  HomeActivity: HomeActivity,
  ProfileScreen: ProfileScreen,
  MapActivity: MapActivity,
  MenuView: { screen: MenuView },
  MenuDetailActivity: MenuDetailActivity
});


