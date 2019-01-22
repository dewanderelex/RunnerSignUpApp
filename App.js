import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Login from './Pages/Login/Login';
import Opening from './Pages/Opening/Opening';
import Hub from './Pages/Hub/Hub';
import Timer from './Pages/Timer/Timer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar 
          backgroundColor = '#1c313a'
          barStyle = 'light-content' 
        />
        
        <Timer />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex : 1,
    backgroundColor: '#fff'
  }
});
