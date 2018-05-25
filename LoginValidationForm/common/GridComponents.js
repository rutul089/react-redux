//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";

// create a component
const GridComponents = ({ image, text, onPress }) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={image} style={styles.cardImage} />
          <Text numberOfLines={1} style={styles.TextInputStyleClass}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardImage: {
    height: 120,
    width: 120,
    resizeMode: "contain",
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2
  },
  TextInputStyleClass: {
    color: "#000",
    padding: 10,
    fontSize: 18,
    justifyContent: "center"
  },
  cardView: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 200,
    margin: 5,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#fff"
  }
});

//make this component available to the app
export default GridComponents;
