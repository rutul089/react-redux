//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content, Text } from "native-base";
import axios from "axios";
import MText from "./../MText";

import mdata from "./data.json";

const URL =
  "http://staging.aroma.ca/wp-json/aroma_api/menudetail?menuid=2698&userid=509";

// create a component
class MenuDetailActivity extends Component {
  state = { option: [] };
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.header_title : "Menu Screen"
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      list: "",
      ID: ""
    };

    this.arrayHolder = [];
  }

  componentDidMount() {
    _ID = this.props.navigation.state.params.ID;
    axios
      .get("http://staging.aroma.ca/wp-json/aroma_api/menudetail", {
        params: {
          menuid: _ID,
          userid: 509
        }
      })
      // .then(response => console.log(response.data.data.options[0]));
      .then(response => {
        this.setState(
          {
            list: response.data.data,
            ID: response.data.data.ID,
            isLoading: false
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false
        });
        alert("Something went wrong please try after some time");
      });
  }

  renderUser() {
    const {
      options,
      title,
      category,
      image,
      is_favorite,
      description,
      Importantinformation
    } = this.state.list;

    if (!this.state.isLoading) {
      console.log("JSON:\n---Starts\n" + options + "\n---End");
      return (
        <View>
          <Text>{options[0].product_title}</Text>
          <Text>{JSON.stringify(options[0].ingredients)}</Text>
          <Text>{title}</Text>
          <Text>{category}</Text>
          <Text>{image}</Text>
          <Text>{is_favorite}</Text>
          <Text>{description}</Text>
          <Text>{Importantinformation}</Text>
        </View>
      );
    }
  }

  render() {
    console.log(this.state.list);
    return (
      <Container style={styles.container}>
        <Content>
          <View>{this.renderUser()}</View>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  }
});

//make this component available to the app
export default MenuDetailActivity;
