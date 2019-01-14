import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Logo from '../../Components/Logo/Logo';
import Form from '../../Components/Form/Form';

import { Button } from 'react-native-elements'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
	}
	
	handleSignin = () => {

	}

  render() {
    return (
      <View style = {styles.login}>
        <Logo />
        <Form input = {"Email"}/>
        <Form input = {"Password"}/>
        <Button 
          raised
          iconRight = {{name: 'directions-walk', type: 'outlined'}}
          title = 'Sign In'
          onPress = {() => this.handleSignin}
          containerViewStyle = {{borderRadius: 10, height: 30, width: 200}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor : '#fff',
        alignItems: 'center',
    }
});