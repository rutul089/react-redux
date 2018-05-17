//import liraries

//https://portal.startapp.com/#/signup URL FOR REFE
import React, { Component } from "react";
import { View, StyleSheet, Modal, Platform, AsyncStorage } from "react-native";

import { HeaderComponents, EditText } from "../common";
import { TextInput } from "react-native";
import { Container, Content, Text, Button } from "native-base";
import { StackActions, NavigationActions } from "react-navigation";
import Register from "./Register";
import * as method from "../../utils/HelperMethods";
import { isLogin } from "../../utils/Constants";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "HomeActivity" })]
});

// create a component
class LoginForm extends Component {
  constructor(props) {
    super(props);
  
  }

  static navigationOptions = {
    header: null
  };

  state = {
    modal: false,
    userName: "abc@abc.com",
    password: "123"
  };

  componentDidMount = () => {
    this.checkFotState();
  };

  /**
   * TO check for variable to auto login
   */
  checkFotState = async () => {
    // user = AsyncStorage.getItem(isLogin);

    // console.log("isLogin: " + user);

    // if (user) {
    //   this.props.navigation.dispatch(resetAction);
    // }

    await AsyncStorage.getItem(isLogin, (result) => {
      console.log(result);
    });

  };

  handleModal = () => {
    this.setState({
      modal: !this.state.modal ? true : false
    });
  };

  checkAuth = () => {
    var _userName = this.state.userName;
    var _password = this.state.password;

    if (method.empty(_userName) && method.empty(_password)) {
      if (method.checkForValidEmail(_userName)) {
        AsyncStorage.setItem("isLogin", "true");
        this.props.navigation.dispatch(resetAction);
      } else {
        alert("Please enter valid email ");
      }
    } else {
      alert("Please enter valid email and password");
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.mainView}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 25, color: "#000" }}>LOGIN</Text>
              <Text note style={styles.subText}>
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
                onChangeText={userName => this.setState({ userName })}
                value={this.state.text}
              />

              <EditText
                underlineColorAndroid="transparent"
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.text}
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
                onPress={this.checkAuth}
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
                  onPress={() => this.props.navigation.dispatch(resetAction)}
                >
                  <Text uppercase={false} style={{ color: "grey" }}>
                    Login as a guest.
                  </Text>
                </Button>
              </View>
              <View style={{ alignItems: "center", marginTop: 5 }}>
                <Button transparent onPress={this.handleModal}>
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

            <Modal
              visible={this.state.modal}
              onRequestClose={this.handleModal}
              animationType={"slide"}
            >
              <Register />
            </Modal>
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
    backgroundColor: "#f2f2f2",
    flexDirection: "column"
  },
  mainView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: Platform.OS === "ios" ? 20 : 10
  },
  subText: {
    textAlign: "center",
    color: "#000",
    marginTop: 8,
    marginBottom: 35
  }
});

//make this component available to the app
export default LoginForm;
