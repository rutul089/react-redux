//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import GridComponents from "../common/GridComponents";
import { Spinner, Content, Container } from "native-base";

const URL = "http://staging.aroma.ca/wp-json/aroma_api/menulist?";

//http://staging.aroma.ca/wp-json/aroma_api/menudetail?menuid=2698&userid=509 next api for detail screen

// create a component
class MenuView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.JSON_HEAD : "Menu Screen"
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      list: [],
      category_id: ""
    };
  }

  componentDidMount() {
    category_id = this.props.navigation.state.params.JSON_category_id;

    axios
      .get("http://staging.aroma.ca/wp-json/aroma_api/menulist", {
        params: {
          catgoryid: category_id
        }
      })
      .then(response =>
        this.setState({
          list: response.data.data,
          isLoading: false
        })
      )
      .catch(error => {
        this.setState({
          isLoading: false
        });
        alert("Something went wrong please try after some time");
      });
  }

  getCategoryId = category_id => {
    this.props.navigation.navigate("MenuDetailActivity", {
      ID: category_id.ID,
      header_title: category_id.title
    });
  };

  displayUsingGrid() {
    if (this.state.isLoading) {
      return (
        <View style={styles.spinnerStyle}>
          <Spinner />
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => (
            <GridComponents
              image={{ uri: item.image }}
              text={item.title}
              onPress={this.getCategoryId.bind(this, item)}
            />
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      );
    }
  }

  render() {
    const { category_id } = this.props.navigation.state.params.JSON_category_id;
    return (
      <Container style={styles.containerM}>
        <Content>{this.displayUsingGrid()}</Content>
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
  },
  containerM: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  }
});

//make this component available to the app
export default MenuView;
