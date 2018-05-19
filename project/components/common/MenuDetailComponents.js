import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Container, Content, Text, Icon, Button } from "native-base";
import HTMLView from "react-native-htmlview";

// create a component
const MenuDetailComponents = ({
  title,
  image,
  is_favorite,
  description,
  Importantinformation,
  product_title,
  Name,
  value,
  onPressOz,
  letsRenderIng,
  arraySize,
  loadingState
}) => {
  renderList = () => {
    if (!loadingState && arraySize > 0) {
     
      return letsRenderIng.map(results => (
        <Text key={results.Name}>
          {results.Name}+{results.value}
        </Text>
      ));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.textTittle}>{title}</Text>
        <HTMLView style={styles.textDescription} value={description} />
        <View style={styles.imageView}>
          <Image source={image} style={styles.imageStyle} />
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
            <Icon name="share" type="Entypo" style={styles.buttonIconStyle} />
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
            <TouchableOpacity style={styles.optionStyle} onPress={onPressOz}>
              <Text style={{ textAlign: "center" }}>{product_title}</Text>
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
            />
            {this.renderList()}
          </View>
        </View>
        {/**
         *This is view for selected Important Information
         *
         */}
        <View style={{ margin: 5, padding: 5, marginBottom: 15 }}>
          <Text style={{ fontSize: 25, borderBottomWidth: 1 }}>
            Important Information
          </Text>
          <Text>{Importantinformation}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default MenuDetailComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
