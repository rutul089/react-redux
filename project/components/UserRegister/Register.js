//import liraries
import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Container, Content, Button, Radio, Right, Text } from "native-base";
import { HeaderComponents, EditText } from "../common";
import { Modal } from "react-native";

// create a component
class Register extends Component {
  state = {
    itemSelected: "male"
  };

  render() {
    console.log(this.state.itemSelected);
    return (
      <Container
        style={{ flex: 1, backgroundColor: "#f2f2f2", flexDirection: "column" }}
      >
        <Content>
          <HeaderComponents style={{ backgroundColor: "#24292E" }}>
            <Text style={{ color: "#fff", fontSize: 22 }}>APP NAME</Text>
          </HeaderComponents>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 25, color: "#000" }}>REGISTER</Text>
            </View>
            {/**----**/}
            <View>
              <EditText
                underlineColorAndroid="transparent"
                placeholder="First Name"
              />

              <EditText
                underlineColorAndroid="transparent"
                placeholder="Last Name"
              />

              <EditText
                style={{ borderWidth: 0.5 }}
                underlineColorAndroid="transparent"
                placeholder="Last Name"
              />
            </View>
            {/**----**/}
            <View
              style={{
                flex: 1,
                marginTop: 10,
                paddingVertical: 8,
                padding: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 8,
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Radio
                  onPress={() => this.setState({ itemSelected: "male" })}
                  selected={this.state.itemSelected == "male"}
                  style={{ marginLeft: 15, marginRight: 15 }}
                />
                <Text>Male</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 8,
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Radio
                  radioColor="#000"
                  onPress={() => this.setState({ itemSelected: "female" })}
                  selected={this.state.itemSelected == "female"}
                  style={{ marginLeft: 15, marginRight: 15 }}
                />
                <Text>Female</Text>
              </View>
            </View>
            {/**---***/}
            <View>
              <EditText
                underlineColorAndroid="transparent"
                placeholder="First Name"
              />

              <EditText
                underlineColorAndroid="transparent"
                placeholder="Last Name"
              />

              <EditText
                style={{ borderWidth: 0.5 }}
                underlineColorAndroid="transparent"
                placeholder="Last Name"
              />
            </View>
            {/**----**/}
            <View style={{ marginTop: 10 }}>
              <TouchableWithoutFeedback onPress={() => alert("Policy")}>
                <Text note style={{ textAlign: "center" }}>
                  By submitting this form, you agree to the StartApp User
                  Agreement and the Privacy Policy
                </Text>
              </TouchableWithoutFeedback>
            </View>
            {/**----**/}
            {/**
             * Bottom part
             */}
            <View
              style={{
                marginTop: 25,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                full
                style={{ backgroundColor: "#05E077" }}
                onPress={() => alert("asdsad")}
              >
                <Text
                  uppercase={false}
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  Sign Up{" "}
                </Text>
              </Button>
              <View style={{ alignItems: "center", marginTop: 8 }}>
                <Button transparent>
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Already Registered?? Sign In
                  </Text>
                </Button>
              </View>
            </View>

            {/**
             *or part
             */}
            <View
              style={{
                marginTop: 5,
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
              <Text
                style={{
                  marginLeft: 8,
                  marginRight: 8,
                  color: "grey",
                  fontWeight: "bold"
                }}
              >
                OR
              </Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
            </View>
            {/**
             *Google login part
             */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                full
                style={{ backgroundColor: "#DD4A38" }}
                onPress={() => alert("Google SIng")}
              >
                <Text
                  uppercase={false}
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  Sign In With Google
                </Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
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
export default Register;
