import { AppRegistry, AsyncStorage } from "react-native";
import React, { Component, YellowBox } from "react";
/**
 * remove comment from  main app
 */
//import App from "./project/App"; 
import Splash from "./project/components/Views/Splash";
import { isLogin } from "./project/utils/Constants";
import CardFeed from './project/components/common/CardFeed';
import WalkThrough from "./project/components/walk_through/WalkThrough";
import AppI from './AppI';

//import App from './LoginValidationForm/App';
//import App from './AnimationProject/app';
import App from './#3.Find Beer App/App';
console.disableYellowBox = true;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "Splash"
    };
    setTimeout(() => {
      console.log("Done some tasks for about 3 seconds");
      this.setState({ currentScreen: "App" });
    }, 1500);
  }

  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Splash" ? <Splash /> : <App />;
    return mainScreen;
  }
}

AppRegistry.registerComponent("ProjectTwo", () => App);
