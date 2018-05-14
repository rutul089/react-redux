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
import { Container, Content, Text } from "native-base";
import CardFeed from "./../common/CardFeed";
import axios from "axios";

// create a component
class HomeActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  state = { data: [], isLoading: true, dataSource };

  static navigationOptions = {
    title: "Feed"
  };

  componentDidMount = () => {
    // axios
    //   .get("https://hplussport.com/api/products.php")
    //   //.then(response =>console.log(response));
    //   .then(response =>
    //     this.setState({
    //       data: response.data,
    //       isLoading: false
    //     })
    //   );

    return fetch("https://hplussport.com/api/products.php")
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson)
          },
          function() {
            // In this block you can do something with new state.
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <Container style={styles.containerM}>
        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => (
              <View style={styles.container}>
                <TouchableOpacity>
                  <View>
                    <Image
                      source={require("../../assets/images/st.png")}
                      style={styles.cardImage}
                    />
                  </View>
                  <View>
                    <Text>{rowData.name}</Text>
                    <Text note> {rowData.description}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
          <ScrollView horizontal>
            <CardFeed />
          </ScrollView>
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
