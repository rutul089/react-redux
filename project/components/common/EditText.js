//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// create a component
const EditText = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style
}) => {
  const { inputStyle,  } = styles;

  return (
    <View>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="grey"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        style={[inputStyle, style]}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    padding: 8,
    marginTop: 10,
    paddingVertical: 8,
    fontSize: 16,
    borderWidth: 0.5,
    backgroundColor: "#fff"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});

//make this component available to the app
export { EditText };
