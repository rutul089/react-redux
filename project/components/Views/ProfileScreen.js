//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { Container, Content, Text } from "native-base";

// create a component
class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Full Info",
    headerStyle: {
      backgroundColor: "#f2f2f2"
    },
    headerTitleStyle: {
      color: "#f0f"
    }
  };

  render() {
    const {
      image,
      description,
      name
    } = this.props.navigation.state.params.JSON_ListView_Clicked_Item;

    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.card}>
            <View>
              <Image
                source={{
                  uri: image
                }}
                style={{ resizeMode: "contain", height: 250, width: null }}
              />
            </View>
            <View>
              <Text style={{ padding: 5, fontSize: 15 }}>{name}</Text>
              <Text note style={{ padding: 5, fontSize: 13, color: "#0d0d0d" }}>
                {description}
              </Text>
            </View>
          </View>
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
  },
  card: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  }
});

//make this component available to the app
export default ProfileScreen;
// <Button
// title="Go to next screen "
// onPress={() => this.props.navigation.popToTop()}
// />
