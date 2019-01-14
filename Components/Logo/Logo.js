import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style = {styles.logo}>
        <Image 
          source = {require('./logo.jpg')} 
          style = {{height: 80, width: 180}}
        />
        <Text style = {styles.logotxt}>
            This is random Logo, Welcome to run sign up
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      alignItems: 'center',
      margin: 20,
    },
    logotxt: {
        marginTop: 30,
        fontSize: 17,
        color: '#000'
    }
});
