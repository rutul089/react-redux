//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";
import {
  BACKGROUND_COLOR,
  STATUSBAR_COLOR,
  BACKGROUND_COLOR_TAB
} from "./../../Util/Color";
import Horizontal_Scroll from "./Horizontal_Scroll";
import BlockItem from "./BlockItem";
import data from "../../Util/data.json";


// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "All",
        "Electronic",
        "Sporting",
        "Computer",
        "Tools",
        "Kitchen",
        "Automotive",
        "Music",
        "Outdoor"
      ],
      selected: "All"
    };
  }

  updateCategory = value => {
    this.setState({
      selected: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={STATUSBAR_COLOR} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Home</Text>
        </View>
        <ScrollView>
          <Horizontal_Scroll
            categories={this.state.categories}
            selected={this.state.selected}
            updateCategory={this.updateCategory}
          />
          <View
            style={{
              marginLeft: 8,
              marginRight: 8
            }}
          >
            <Text style={styles.textStyle}>{this.state.selected}</Text>
            <Text>{this.state.selected}</Text>
            <BlockItem />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
    color: "#f2f2f2",
    fontWeight: "bold"
  }
});

//make this component available to the app
export default Home;
