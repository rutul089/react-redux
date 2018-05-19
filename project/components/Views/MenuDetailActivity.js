//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, WebView } from "react-native";
import { Container, Content, Text } from "native-base";
import axios from "axios";

import HTMLView from "react-native-htmlview";
import { Button } from "react-native";
import MenuDetailComponents from "./../common/MenuDetailComponents";
const URL =
  "http://staging.aroma.ca/wp-json/aroma_api/menudetail?menuid=2698&userid=509";

const optionsSize = 0;
const mProduct_title = "";
const mIngredients = [];
const initial = true;

// create a component
class MenuDetailActivity extends Component {
  state = { oz20: false };

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
      mOptionsIndex: 0
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
      .then(response => {
        this.setState({
          list: response.data.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false
        });
        alert("Something went wrong please try after some time");
      });
  }

  renderList(data) {
    if (!this.state.isLoading && optionsSize > 0) {
      console.log("---OUT:Data" + mIngredients);
      return data.map(results => (
        <Text key={results.Name}>
          {results.Name}+{results.value}
        </Text>
      ));
    }
  }

  renderUser() {
    //De structuring list
    const {
      options,
      title,
      category,
      image,
      is_favorite,
      description,
      Importantinformation
    } = this.state.list;

    /**
     * Due to lyf cycle of react native happens render method automatically called
     * so we have to maintain a flag or wait for till the we have response to show or work with it
     */
    if (!this.state.isLoading) {
      /**
       * idx is the index of option if and changes when user
       */
      const idx = this.state.mOptionsIndex;
      optionsSize = options.length;
      // const product_title = "";
      // const ingredients = [];

      if (idx < optionsSize && optionsSize > 0) {
        if (optionsSize === 0) {
          idx = 0;
        } else {
          if (idx === optionsSize - 1) {
            idx = 0;
          } else {
            if (!initial) {
              idx = idx + 1;
            }
          }
        }
        const { product_title, ingredients } = options[idx];

        mProduct_title = product_title;
        mIngredients = ingredients;

        console.log("---IN:Data" + product_title + "  IDX:" + idx);
      }

      return (
        <View>
          <MenuDetailComponents
            title={title}
            image={{ uri: image }}
            description={description}
            Importantinformation={Importantinformation}
          />
          <Button
            title="20oz"
            onPress={() => {
              initial = false;
              this.setState({
                mOptionsIndex: idx
              });
            }}
          />
          {this.renderList(mIngredients)}
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
