import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StyledText } from '../components/StyledText'

export class NavHeader extends React.Component {
  render() {
    return (
			<View style={styles.container}>

				{ this.props.showBack &&
					<TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack(null) }>
						<Image
							style={{width: 10, height: 18}}
							source={require('../assets/images/back.png')}
						/>
					</TouchableOpacity>
				}

				<StyledText style={styles.title} bold={true}>{`SZIG\nHelyettesítés app`}</StyledText>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 80,
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