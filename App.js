import React from 'react';
import { StatusBar, StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Grid } from "react-native-easy-grid";

export default function App() {
  function navigationBar(p) {
    /**/
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#28292d" />
      <View style={styles.navigation}>
        <Grid>
          <Col>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#36373b" onPress={() => { navigationBar("star") }}>
              <View>
                <Icon name="star" size={30} style={styles.iconNavigation} />
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#36373b" onPress={() => { navigationBar("home") }}>
              <View>
                <Icon name="home" size={30} style={styles.iconNavigation} />
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#36373b" onPress={() => { navigationBar("vk") }}>
              <View>
                <Icon name="vk" size={30} style={styles.iconNavigation} />
              </View>
            </TouchableHighlight>
          </Col>
        </Grid>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2e33'
  },
  navigation: {
    backgroundColor: "#28292d",
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  iconNavigation: {
    color: '#c8c9cc',
    textAlign: 'center',
    padding: 7
  }
});
