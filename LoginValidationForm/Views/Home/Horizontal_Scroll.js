//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Icon, Item, Button } from "native-base";

//FontAwesome
const categoriesIcon = value => {
  let name = "";
  switch (value) {
    case "All":
      name = "circle-o-notch";
      break;
    case "Electronic":
      name = "mobile";
      break;
    case "Sporting":
      name = "soccer-ball-o";
      break;
    case "Computer":
      name = "usb";
      break;
    case "Tools":
      name = "gears";
      break;
    case "Kitchen":
      name = "coffee";
      break;
    case "Automotive":
      name = "motorcycle";
      break;
    case "Music":
      name = "music";
      break;
    case "Outdoor":
      name = "briefcase";
      break;
    default:
      name = "";
  }
  return name;
};

// create a component
class Horizontal_Scroll extends Component {
  generateIcon = categories =>
    categories
      ? categories.map(item => (
          <View style={{ marginRight: 15 }} key={item}>
            <Button
              iconLeft
              //#222222  #383838  #c1c1c1
              style={{
                borderRadius: 100,
                backgroundColor:
                  this.props.selected !== item ? "#222222" : "#c1c1c1"
              }}
              onPress={() => this.props.updateCategory(item)}
            >
              <Icon name={categoriesIcon(item)} type="FontAwesome" />
              <Text>{item}</Text>
            </Button>
          </View>
        ))
      : null;

  render() {
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={200}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.scrollContainer}>
          {this.generateIcon(this.props.categories)}
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    padding: 5
  }
});

//make this component available to the app
export default Horizontal_Scroll;
