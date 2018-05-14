//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile Screen",
    headerStyle: {
      backgroundColor: "#f2f2f2"
    },
    headerTitleStyle: {
      color: "#f0f"
    }
  };

  render() {
    //const { params } = this.props.navigation.state;
    const str = this.props.navigation.state.params.msg;
    // console.log(str);

    return (
      <View style={styles.container}>
        <Text>ProfileScreen + {str}</Text>
        <Button
          title="Go to next screen "
          onPress={() => this.props.navigation.popToTop()}
        />
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
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default ProfileScreen;
