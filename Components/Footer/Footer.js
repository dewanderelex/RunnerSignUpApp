import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style = {styles.footer}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#0a0',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
});