//import liraries
import React, { Component } from "react";
import {
  createStackNavigator,
  StackActions,
  createSwitchNavigator,
  createBottomTabNavigator,
  NavigationActions
} from "react-navigation";

import Home from "./components/home/index";
import { Icon } from "native-base";
import Search from "./components/search";
import Favourite from "./components/search/Favourite";
// create a component
class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: Search,

      navigationOptions: {
        tabBarLabel: "Search",
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
    Favourite: {
      screen: Favourite,
      navigationOptions: {
        tabBarLabel: "Favourite",
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
    initialRouteName: "Search",
    order: ["Search", "Favourite"],
    
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#f2f2f2",
        borderTopWidth: 0
      }
    }
  }
);



//make this component available to the app
export default App;
