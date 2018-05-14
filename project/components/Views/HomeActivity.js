//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  AsyncStorage,
  Image,
  ScrollView,
  ListView
} from "react-native";

import { NavigationActions } from "react-navigation";
import { isLogin } from "../../utils/Constants";
import { Container, Content, Text, Spinner } from "native-base";
import CardFeed from "./../common/CardFeed";
import axios from "axios";
var data = [];
// create a component
class HomeActivity extends Component {
  state = { data: [], results: [], isLoading: true };
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Feed"
  };

  componentDidMount() {
    axios
      .get("https://hplussport.com/api/products.php")
      //.then(response =>console.log(response));
      .then(response =>
        this.setState({
          data: response.data,
          isLoading: false
        })
      );
  }

  displayingData() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <Spinner style={{ justifyContent: "center", alignItems: "center" }} />
        </View>
      );
    } else {
      return this.renderUsers();
    }
  }

  renderUsers() {
    //On click

    return this.state.data.map(data => (
      <CardFeed
        image={{ uri: data.image }}
        name={data.name}
        description={data.description}
      />
    ));
  }

  render() {
    console.log(this.state.dataSource);
    return (
      <Container style={styles.containerM}>
        <Content>
          <ScrollView horizontal>{this.displayingData()}</ScrollView>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  containerM: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  container: {
    height: 250,
    width: 150,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  cardImage: {
    height: 120,
    resizeMode: "cover",
    width: null,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2
  }
});

//make this component available to the app
export default HomeActivity;
