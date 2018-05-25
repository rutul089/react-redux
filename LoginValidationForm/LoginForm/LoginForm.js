//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { Button, Content } from "native-base";
import InputComponent from "../common/InputComponent";
import { TextInput } from "react-native";
import validationRules from "./validationRules";
import { StackActions, NavigationActions } from "react-navigation";
var email, password, mobileNumber, cPassword;


// create a component
class LoginForm extends Component {
  static navigationOptions = {
    header: null
  };
  /**
   * type is for switch case we created one single file for user input
   */
  state = {
    type: "Login",
    action: "Login",
    actionMode: "Not a user , Register",
    hasError: false,
    passwordDontMatch: false,
    form: {
      email: {
        value: "",
        valid: false,
        type: "textInput",
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        type: "textInput",
        rules: {
          isRequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        type: "textInput",
        rules: {
          isRequired: true,
          confirmPass: "password"
        }
      },
      phoneNumber: {
        value: "",
        valid: false,
        type: "textInput",
        rules: {
          isRequired: false,
          isNumber: true,
          minLength: 10
        }
      }
    }
  };

  constructor(props) {
    super(props);
  }

  updateValue = (name, value) => {
    this.setState({
      hasError: false,
      passwordDontMatch: false
    });

    /**
     * this is copy of original form where data is coming we
     * we do not change original form so we create copy
     */
    let formCopy = this.state.form;
    formCopy[name].value = value;
    let rules = formCopy[name].rules; // to get name and rules

    let valid = validationRules(value, rules, formCopy); // we are parsing value for value , rules for rule detail and formCopy for all detail
    formCopy[name].valid = valid;

    //console.log(valid);

    this.setState({
      form: formCopy
    });
  };

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      hasError: false,
      passwordDontMatch: false,
      type: type === "Login" ? "Register" : "Login",
      action: type === "Login" ? "Register" : "Login",
      actionMode:
        type === "Login"
          ? "Already Registered, Login "
          : "Not a user , Register"
    });
  };

  btnClick = () => {
    /**
     * Here we are checking type if type is login then we will cal login
     * and if we get register then we will call register function
     */

    let isFormValid = true;
    let passwordValid = false;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type === "Login") {
        if (key !== "confirmPassword" && key !== "phoneNumber") {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        isFormValid = isFormValid && formCopy[key].valid;
        passwordValid = formCopy["confirmPassword"].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }
    if (!passwordValid) {
      this.setState({
        passwordDontMatch: true,
        hasError: false
      });
    }

    if (isFormValid) {
      if (this.state.type === "Login") {
        console.log(formToSubmit);
        console.log(formToSubmit.email);
      } else {
        console.log(formToSubmit);
        console.log(formToSubmit.password);
      }
    } else {
      this.setState({
        hasError: true
      });
    }
  };

  showError = () =>
    this.state.hasError ? (
      <View>
        <Text style={{ fontSize: 15, color: "#f00", marginTop: 10 }}>
          Please enter valid information
        </Text>
      </View>
    ) : null;

  showPasswordError = () =>
    this.state.passwordDontMatch ? (
      <View>
        <Text style={{ fontSize: 15, color: "#f00", marginTop: 10 }}>
          Password and ConfirmPassword are not equal
        </Text>
      </View>
    ) : null;

  RegisterForm = () =>
    this.state.type != "Login" ? (
      <View>
        <InputComponent
          placeholder="Confirm password"
          type={this.state.form.confirmPassword.type}
          value={this.state.form.confirmPassword.value}
          onChangeText={value => this.updateValue("confirmPassword", value)}
          autoCapitalize={"none"}
          secureTextEntry
        />

        {this.showPasswordError()}
        <InputComponent
          placeholder="Enter your phone number"
          type={this.state.form.phoneNumber.type}
          value={this.state.form.phoneNumber.value}
          onChangeText={value => this.updateValue("phoneNumber", value)}
          autoCapitalize={"none"}
          keyboardType={"numeric"}
        />
      </View>
    ) : null;

  render() {
    return (
      <Content style={styles.container}>
        <View
          style={{
            padding: 10,
            marginTop: 10,
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../project/assets/images/login_panel.jpg")}
            style={{
              resizeMode: "contain"
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            padding: 5
          }}
        >
          <InputComponent
            placeholder="Enter your email"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
            onChangeText={value => this.updateValue("email", value)}
            autoCapitalize={"none"}
            keyboardType={"email-address"}
          />
          <InputComponent
            placeholder="Enter your password"
            type={this.state.form.password.type}
            value={this.state.form.password.value}
            onChangeText={value => this.updateValue("password", value)}
            secureTextEntry
          />

          {/*
      * if form type is register then we will display phone number and confirm password 
      */}

          {this.RegisterForm()}

          {this.showError()}

          <View style={styles.btnView}>
            <View>
              <Button transparent onPress={this.btnClick}>
                <Text
                  style={{ fontSize: 19, color: "#fd9727", fontWeight: "300" }}
                >
                  {this.state.action}
                </Text>
              </Button>
            </View>
          </View>

          <View style={styles.btnView}>
            <View>
              <Button transparent onPress={this.changeFormType}>
                <Text
                  style={{
                    fontSize: 19,
                    color: "lightgrey",
                    fontWeight: "300"
                  }}
                >
                  {this.state.actionMode}
                </Text>
              </Button>
            </View>
          </View>

          <View style={styles.btnView}>
            <View>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("LoadTabs")}
              >
                <Text
                  style={{
                    fontSize: 19,
                    color: "lightgrey",
                    fontWeight: "300"
                  }}
                >
                  Login as guest..
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});

//make this component available to the app
export default LoginForm;
