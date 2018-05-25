/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Container, Content, Text, Icon, Button } from "native-base";

export default class AppI extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text> Hello</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  
});
