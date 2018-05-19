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
  TouchableOpacity
} from "react-native";
import { Container, Content, Text, Icon, Button } from "native-base";

export default class AppI extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ marginLeft: 5, marginRight: 5 }}>
            <Text style={styles.textTittle}>Iced Latte / Cappuccino</Text>
            <Text style={styles.textDescription}>
              Shots of our signature espresso blended with milk, poured over
              ice. Made from beans imported from South America, Asia and Africa.
              Roasted in our exclusive facilities, freshly ground in-store and
              expertly pulled to order.
            </Text>
            <View style={styles.imageView}>
              <Image
                source={require("./project/assets/images/ar.jpg")}
                style={styles.imageStyle}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                transparent
                onPress={() => alert("like")}
                style={styles.buttonStyle}
              >
                <Icon
                  name="heart-outlined" // use heart for filed one
                  type="Entypo"
                  style={styles.buttonIconStyle}
                />
              </Button>
              <Button
                transparent
                onPress={() => alert("share")}
                style={styles.buttonStyle}
              >
                <Icon
                  name="share"
                  type="Entypo"
                  style={styles.buttonIconStyle}
                />
              </Button>
            </View>
            {/**
             *This is view for select option for oz of devices
             *
             */}
            <View>
              <Text note style={[styles.textDescription, { marginTop: 10 }]}>
                Please select one Option
              </Text>
              <View style={[styles.buttonStyle, { padding: 5, margin: 5 }]}>
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={() => alert("16")}
                >
                  <Text style={{ textAlign: "center" }}>
                    Iced Latte/Cappuccino (Medium - 16 oz.)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={() => alert("20")}
                >
                  <Text style={{ textAlign: "center" }}>
                    Iced Latte/Cappuccino (Large - 20 oz.)
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/**
             *This is view for selected ingredients
             *
             */}
            <View>
              <Text style={{ margin: 5, fontSize: 25, borderBottomWidth: 1 }}>
                Ingredients
              </Text>
              <View style={{ margin: 5, marginLeft: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text>Caloriessadsadsadsad</Text>
                  <Text>11552</Text>
                </View>
              </View>
            </View>
            {/**
             *This is view for selected Important Information
             *
             */}
            <View style={{ margin: 5, padding: 5 }}>
              <Text style={{ fontSize: 25, borderBottomWidth: 1 }}>
                Important Information
              </Text>
              <Text>
                Nutritional information is based on information provided to
                Aroma Espresso Bar Canada Inc. by its suppliers and is based on
                standard product formulations. Aroma Espresso Bar Canada Inc.
                attempts to provide product informat
              </Text>
            </View>
          </View>
        </Content>
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
  textTittle: {
    fontSize: 22,
    color: "#000",
    padding: 5,
    textAlign: "center",
    fontWeight: "100"
  },
  textDescription: {
    textAlign: "center",
    padding: 5
  },
  imageView: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 200,
    width: 200
  },
  buttonStyle: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonIconStyle: {
    color: "#000",
    fontSize: 40
  },
  optionStyle: {
    flex: 1,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 4
  }
});
