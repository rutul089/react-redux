import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  StackActions,
  createSwitchNavigator,
  createBottomTabNavigator,
  NavigationActions
} from "react-navigation";

import Index from "./Index";
import LoginForm from "./LoginForm/LoginForm";
import Home from "./Views/Home/index";
import Profile from "./Views/Profile/index";
import { Icon } from "native-base";

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  LoginForm: LoginForm
});

const AppStackNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,

      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            size={22}
            type="Entypo"
            style={{ color: tintColor }}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user"
            size={22}
            type="Entypo"
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Profile"],
    backBehavior: "none",
    tabBarOptions: {
      activeTintColor: "#D24849",
      inactiveTintColor: "#D1D1D1",
      style: {
        backgroundColor: "#E3E4E5",
        borderTopWidth: 0
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  /* 
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  LoginForm: LoginForm,
  LoadTabs: AppStackNavigator
});
