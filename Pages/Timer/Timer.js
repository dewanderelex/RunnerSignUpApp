import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style = {styles.timerPage}>
        <View style = {styles.timerTop}>
          <View style = {styles.timeWrapperInner}>
            <Text style = {styles.lapTimer}>0:00:59</Text>
            <Text style = {styles.mainTimer}>0:00:59</Text>
          </View>
        </View>
        <View style = {styles.timerBottom}>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerPage: {
    backgroundColor: '#000000',
    flex: 1,
  },
  timerTop: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'center',
  },
  timerBottom: {
    flex: 2,
    backgroundColor: '#F9F9F9'
  },
  mainTimer: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'flex-end',
    margin: 10,
    color: '#FFFFFF'
  },
  lapTimer: {
    fontSize: 18,
    alignSelf: 'flex-end',
    margin: 10,
    color: '#FFFFFF'
  },
  timeWrapperInner: {
    borderWidth: 0.5,
    alignSelf: 'center',
  }
});
