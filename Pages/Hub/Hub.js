import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TouchableNativeFeedback, Dimensions } from 'react-native';

import Logo from '../../Components/Logo/Logo';
import Footer from '../../Components/Footer/Footer';

const WIDTH = Dimensions.get('window').width;

export default class Hub extends Component {
  constructor(props) {
    super(props);
    this.state = {
			user: null,
			race: null
    };
  }

  render() {
    return (
      <View style = {styles.hub}>
				<View style = {{marginTop: 30, marginBottom: 30, alignItems: 'center', width: WIDTH}}>
					<Logo />
				</View>
				<View style = {styles.grid}>
				<TouchableNativeFeedback>
					<View  style = {styles.box}>
						{/** <Icon /> */}
						<Text style = {styles.textItem}>Timer</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback>
					<View  style = {styles.box}>
						{/** <Icon /> */}
						<Text style = {styles.textItem}>Checker</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback>
					<View  style = {styles.box}>
						{/** <Icon /> */}
						<Text style = {styles.textItem}>Chute</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback>
					<View  style = {styles.box}>
						{/** <Icon /> */}
						<Text style = {styles.textItem}>Other</Text>
					</View>
				</TouchableNativeFeedback>
				</View>

				<View style = {{margin: 8}}>
					<Text>
						Sign in as {this.state.user}
					</Text>
				</View>

				<View style = {{margin: 8}}>
					<Text>
						Timing for {this.state.race}
					</Text>
				</View>
				<Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	hub:{
		flex: 1,
		alignItems: 'center'
	},
	grid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#000'
	},
	box: {
		margin: 20,
		width: WIDTH / 2 - 40,
		height: 100,
		backgroundColor: '#f4f',
		alignItems: 'center',
		paddingTop: 15,
		borderRadius: 20,
	},
	textItem: {
		color: '#fff',
		fontSize: 20,
	},
	infoText: {
		fontSize: 16,
		color: '#fff',
	}
});