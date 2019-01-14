import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style = {styles.form}>
        <Text style = {{color: '#fff'}}> {this.props.input} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#717',
        height: 30,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
        padding: 5,
        margin: 10
    }
});
