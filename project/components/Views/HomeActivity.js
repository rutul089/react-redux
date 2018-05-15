//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  AsyncStorage,
  Image,
  WebView,
  ScrollView,
  ListView,
  TextInput,
  Dimensions
} from "react-native";

import { NavigationActions } from "react-navigation";
import { isLogin } from "../../utils/Constants";
import { Container, Content, Text, Spinner } from "native-base";
import CardFeed from "./../common/CardFeed";
import axios from "axios";

// create a component

class HomeActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }),
      dataSourceAxios: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }),
      isLoading: true,
      isLoadingA: true,
      text: ""
    };
    this.arrayHolder = [];
  }

  //navigation options for header like tittle change color adding custom style and all
  static navigationOptions = {
    title: "Feed"
  };

  componentDidMount() {
    fetch("https://hplussport.com/api/products.php")
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson; // here we have all products data
        this.setState(
          {
            dataSource: this.state.dataSource.cloneWithRows(data),
            isLoading: false
          },
          function() {
            this.arrayHolder = data;
          }
        );
      })
      .catch(error => {
        alert('Something went wrong please try after some time')
        
      });

    axios
      .get("https://hplussport.com/api/products.php")
      //.then(response =>console.log(response));
      .then(response =>
        this.setState({
          dataSourceAxios: this.state.dataSource.cloneWithRows(response.data),
          isLoadingA: false
        })
      )
      .catch(error => {
        console.error(error);
      });
  }

  //To navigate user to different page
  navigateUser = description => {
    this.props.navigation.navigate("ProfileScreen", {
      JSON_ListView_Clicked_Item: description
    });
  };

  //To search particular item
  SearchFilterFunction(text) {
    const newData = this.arrayHolder.filter(function(item) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    });
  }

  displayingDataWithAxios() {
    if (this.state.isLoadingA) {
      return (
        <View style={styles.spinnerStyle}>
          <Spinner />
        </View>
      );
    } else {
      return (
        <ListView
          dataSource={this.state.dataSourceAxios}
          horizontal
          renderRow={rowData => (
            <CardFeed
              image={{ uri: rowData.image }}
              name={rowData.name}
              onPress={this.navigateUser}
              description={rowData.description}
            />
          )}
        />
      );
    }
  }

  displayingDataWithFetch() {
    if (this.state.isLoading) {
      return (
        <View style={styles.spinnerStyle}>
          <Spinner />
        </View>
      );
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          horizontal
          renderRow={rowData => (
            <CardFeed
              image={{ uri: rowData.image }}
              name={rowData.name}
              onPress={this.navigateUser.bind(this, rowData)}
              description={rowData.description}
            />
          )}
        />
      );
    }
  }

  render() {
    return (
      <Container style={styles.containerM}>
        <Content>
          {/** Here is method how to display data with AXIOS api */}
          {/*   <View>
            <Text>Fetch with axios</Text>
            {this.displayingDataWithAxios()}
       </View> */}
          {/** Here is method how to display data with fetch api */}
          <View>
            <TextInput
              style={styles.TextInputStyleClass}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
              onChangeText={text => this.SearchFilterFunction(text)}
            />

            {this.displayingDataWithFetch()}
          </View>
          <View>
          <Button onPress ={()=>this.props.navigation.navigate('MapActivity')} title="MapView"/>
          </View>
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
  spinnerStyle: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 2,
    width: Dimensions.get("window").width,
    height: 250,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  TextInputStyleClass: {
    textAlign: "center",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 4,
    marginBottom: 2,
    padding: 3,
    height: 40,
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 50,
    backgroundColor: "#FFFFFF"
  }
});

//make this component available to the app
export default HomeActivity;

//https://github.com/react-community/react-native-maps