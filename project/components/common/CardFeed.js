//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// create a component
const CardFeed = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            source={require("../../assets/images/st.png")}
            style={styles.cardImage}
          />
        </View>
        <View>
          <Text>adsa</Text>
          <Text note> adasda ojoajd oijaois jdoiasj doi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 250,
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
    resizeMode: "cover",
    width: null,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2
  }
});

//make this component available to the app
export default CardFeed;
