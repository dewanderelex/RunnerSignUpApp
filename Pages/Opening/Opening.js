import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import Logo from '../../Components/Logo/Logo';
import {Button} from 'react-native-elements'

export default class Opening extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleOffline = () => {

  }

  handleSignin = () => {

  }

  render() {
    return (
      <View style = {styles.opening}>
            <View style = {{marginTop: 40}}>
                <Logo />
            </View>
            <Text style = {{margin: 30, fontSize: 23, color: '#f3f'}}>Race Director? Sign in here</Text>

            <Button 
                raised
                iconRight = {{name: 'directions-walk', type: 'outlined'}}
                title = 'Sign In'
                onPress = {() => this.handleSignin}
                containerViewStyle = {{borderRadius: 10, height: 30, width: 200}}
            />

            <Text style = {{margin: 30, fontSize: 23, color: '#f3f', marginTop: 50}}>No Connection? Record an event offline!</Text>

            <Button 
                raised
                iconRight = {{name: 'directions-walk', type: 'outlined'}}
                title = 'Record Offline'
                onPress = {() => this.handleOffline}
                containerViewStyle = {{borderRadius: 10, height: 30, width: 200}}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    opening: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    }
});