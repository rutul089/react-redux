//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const CardItemComponents = props => {
  return <View style={styles.container}>{props.children}</View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
   borderBottomWidth: 1,
   padding: 5,
   backgroundColor: '#ffff',
   justifyContent: 'flex-start',
   flexDirection: 'row',
   position: 'relative',
  }
});

//make this component available to the app
export  {CardItemComponents};
