//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Screen1 from "./Screen1";
import LoginForm from "../UserRegister/LoginForm";
// create a component
class WalkThrough extends Component {
  constructor(props) {
    super(props);
  }

  testClick = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        style={styles.container}
      >
        <View style={styles.outer}>
          <Text style={styles.innerText}>This is creen one</Text>
        </View>
        <View style={[styles.outer, styles.fb]}>
          <Text style={styles.innerText}>This is creen fb</Text>
        </View>
        <View style={[styles.outer, styles.git]}>
          <Screen1 />
        </View>
        <View style={[styles.outer, styles.link]}>
          <Text style={styles.innerText}>This is creen link</Text>
          <TouchableOpacity onPress={this.testClick}>
            <Text>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#bb0000",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  innerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center"
  },
  fb: {
    backgroundColor: "#3b5998"
  },
  git: {
    backgroundColor: "#171516"
  },
  link: {
    backgroundColor: "#007bb6"
  }
});

//make this component available to the app
export default WalkThrough;
