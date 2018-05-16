//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

import axios from "axios";
import { Spinner } from "native-base";
// create a component
const URL =
  "http://staging.aroma.ca/wp-json/aroma_api/nearest_store_list_data?lat=43.6534399&lng=-79.38409009999998";

class MapActivity extends Component {
  static navigationOptions = {
    title: "Google MapView"
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get(URL)
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

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Spinner />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <MapView
          zoomControlEnabled
          zoomEnabled
          showsMyLocationButton
          showsBuildings={false}
          showsTraffic={false}
          showsIndoors={false}
          style={styles.map}
          region={{
            latitude: 43.6534399,
            longitude: -79.38409009999998,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          {this.state.list.map(marker => (
            <MapView.Marker
              pinColor={"#000"}
              coordinate={{
                //You cant not parse string here it require float or double
                latitude: parseFloat(marker.lat),
                longitude: parseFloat(marker.lng)
              }}
              title={marker.store}
              description={marker.storeTime}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute"
  }
});

//make this component available to the app
export default MapActivity;
