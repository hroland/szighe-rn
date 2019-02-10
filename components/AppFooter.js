import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StyledText } from '../components/StyledText'

export class AppFooter extends React.Component {
  render() {
    return (
			<View style={styles.container}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		justifyContent: 'center',
		// backgroundColor: 'red'
	},
	backButton: {
		position: 'absolute',
		padding: 20,
		marginLeft: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		textAlign: 'center',
		alignSelf: 'center'
	}
})