//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ListItems extends Component {
  render() {
    const { data } = this.props;
    console.log("data: "+data);
    // return data.map((data, i) => (
    //   <View key={i}>
    //     <Text>{data}</Text>
    //   </View>
    // ));
  }
}
