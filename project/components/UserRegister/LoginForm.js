//import liraries

//https://portal.startapp.com/#/signup URL FOR REFE
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { HeaderComponents, EditText } from "../common";
import { TextInput } from "react-native";
import { Container, Content, Text, Button } from "native-base";

// create a component
class LoginForm extends Component {
  render() {
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
              <Text style={{ fontSize: 25, color: "#000" }}>LOGIN</Text>
              <Text
                note
                style={{
                  textAlign: "center",
                  color: "#000",
                  marginTop: 8,
                  marginBottom: 35
                }}
              >
                Login using your existing email and password
              </Text>
            </View>
            {/**
             *View for user input field
             */}
            <View>
              <EditText
                underlineColorAndroid="transparent"
                placeholder="Enter your email address"
              />

              <EditText
                underlineColorAndroid="transparent"
                placeholder="Enter your password"
                secureTextEntry={true}
              />

              <View style={{ alignItems: "flex-end" }}>
                <View>
                  <Button
                    transparent
                    onPress={() => alert(" Forgot your password?")}
                  >
                    <Text uppercase={false} style={{ color: "grey" }}>
                      Forgot your password?
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
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
                onPress={() => alert("Sign IN")}
              >
                <Text
                  uppercase={false}
                  style={{ fontWeight: "bold", fontSize: 16 }}
                >
                  Sign In{" "}
                </Text>
              </Button>
              <View style={{ alignItems: "center", marginTop: 8 }}>
                <Button
                  transparent
                  onPress={() => alert(" Resend activation mail.")}
                >
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Resend activation mail.
                  </Text>
                </Button>
              </View>
              <View style={{ alignItems: "center", marginTop: 8 }}>
                <Button transparent onPress={() => alert(" Sign Up")}>
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Don't have an account? Sign Up
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
              <View style={{ alignItems: "center", marginTop: 8 }}>
                <Button transparent onPress={() => alert(" RPrivacy Policy")}>
                  <Text
                    uppercase={false}
                    style={{
                      color: "grey",
                      textDecorationLine: "underline",
                      fontWeight: "bold"
                    }}
                  >
                    Privacy Policy
                  </Text>
                </Button>
              </View>
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
export default LoginForm;
