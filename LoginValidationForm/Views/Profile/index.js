//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { BACKGROUND_COLOR ,STATUSBAR_COLOR,BACKGROUND_COLOR_TAB} from './../../Util/Color';

// create a component
class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Profile</Text>
        </View>
        <Text>Profilse</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2f2f2"
  },
  viewStyle: {
    backgroundColor: BACKGROUND_COLOR_TAB,
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "ios" ? 34 : 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold"
  }
});

//make this component available to the app
export default Profile;
