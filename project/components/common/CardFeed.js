//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "native-base";
// create a component
const CardFeed = ({ image, name, description, onPress }) => {
  //32 word 59Word
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={image} style={styles.cardImage} />
        </View>
        <View style={{ padding: 5 }}>
          <Text numberOfLines={1}>{name}</Text>
          <Text  numberOfLines={5} note style={{ marginTop: 5, color: "#0d0d0d" }}>
            {" "}
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  cardImage: {
    height: 120,
    resizeMode: "contain",
    width: null,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2
  }
});

//make this component available to the app
export default CardFeed;
