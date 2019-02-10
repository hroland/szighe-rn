import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { StyledText } from './StyledText';

export class PushPickerPart extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {
    return (
				<TouchableOpacity style={styles.optionContainer} activeOpacity={0.9} onPress={this.props.onPress}>
					<Image
							style={[styles.optionCheck, { opacity: this.props.checked ? 1 : 0 }]}
							source={require('../assets/images/check.png')}
						/>
					<View style={styles.optionLabels}>
						<StyledText style={styles.optionTitle}>{this.props.title}</StyledText>
						<StyledText style={styles.optionDescription} light={true}>{this.props.description}</StyledText>
					</View>
				</TouchableOpacity>
		);
  }
}

export class PushPicker extends React.Component {

	state = {
		setting: true,
	}

  render() {
    return (

			<View style={styles.container}>

				<PushPickerPart
					title="Mindig"
					description="amikor változás történik"
					checked={!!this.state.setting}
					onPress={() => this.setSetting(true)}
				/>
				<PushPickerPart
					title="Csak ha rám vonatkozik"
					description="osztályod/évfolyamod alapján"
					checked={!this.state.setting}
					onPress={() => this.setSetting(false)}
				/>
			</View>

		);
	}
	
	setSetting(value) {
		this.setState({ setting: value })

		this.props.onValueChange(value)
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: 'column',
		// backgroundColor: 'red',
		// justifyContent: 'space-evenly',
		alignItems: 'stretch',
    justifyContent: 'flex-start',
		alignSelf: 'auto',
	},
	optionContainer: {
		height: 96,
		backgroundColor: '#12183C',
		borderRadius: 4,
		flexDirection: 'row',
		marginVertical: 6,
		// flex: 1,
		alignItems: 'center',
		paddingHorizontal: 24,
		paddingVertical: 20
	},
	optionCheck: {
		width: 18,
		height: 13,
		marginRight: 18
	},	
	optionTitle: {
		fontSize: 20
	},
	optionDescription: {
		fontSize: 15
	}
})