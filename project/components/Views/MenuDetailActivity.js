//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content, Text } from "native-base";
import axios from "axios";
import MText from "./../MText";
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
      list: [],

      ID: ""
    };
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
      .then(response =>
        this.setState({
          list: response.data.data,
          option: response.data.data.options,
          isLoading: false
        })
      )
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false
        });
        alert("Something went wrong please try after some time");
      });
  }

  renderUser() {
    const temp = JSON.stringify([{ item1: "test" }]);
    const {
      options,
      title,
      category,
      image,
      is_favorite,
      description,
      Importantinformation
    } = this.state.list;

    return (
      <View>
        <Text>{title}</Text>
        <Text>{category}</Text>
        <Text>{image}</Text>

        
        <Text>{is_favorite}</Text>
        <Text>{description}</Text>
        <Text>{Importantinformation}</Text>
      </View>
    );
  }

  renderUSer() {
    console.log(this.state.list);
    return this.state.list.options.map((item, index) => (
      <Text>{item.product_title}</Text>
    ));
  }

  render() {
    console.log(this.state.list);
    return (
      <Container style={styles.container}>
        <Content>{this.renderUser()}</Content>
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
