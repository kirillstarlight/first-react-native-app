import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import photo from './photo_2019-07-23_14-45-08.jpg';

export default class FlatListBasics extends Component {
  render() {
    return (
      <ImageBackground source={photo} style={{
        width: '100%', height: '100%', flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={styles.text}>lick ma pussy</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  text: {

    fontSize: 60,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: ({ width: 1, height: 1 }),
    textShadowRadius: 1
  }
})