import React from 'react';
import { Text, View, TouchableOpacity, Picker, Button, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

import { StyledText } from './StyledText';

import RNPickerSelect from 'react-native-picker-select';

export class ClassPickerPart extends React.Component {

	constructor(props) {
		super(props)

		this.state.value = props.items[0]
	}

	state = {
		value: null,
	}

	mapForPicker (arr) {
		return arr.map(item => ({ label: item, value: item }))
	}

  render() {
    return (

			<RNPickerSelect
				style={styles.partContainer}
				items={this.mapForPicker(this.props.items)}
				itemKey={'7'}
				placeholder={{}}
				hideDoneBar={true}
				onValueChange={(value) => {
					this.setState({
						value: value,
					});

					this.props.onValueChange(value)
				}}
				>
				{/* <TouchableOpacity style={styles.partContainer}>
					<StyledText style={styles.partLabel} pointerEvents="none">{this.state.value}</StyledText>
					<View style={styles.partLine} pointerEvents="none"></View>
				</TouchableOpacity> */}

				{/* <TextInput
					style={{ width:200, ...StyledText.styles }}
					editable={false}
					value={this.state.value}
				/> */}

				<TouchableOpacity style={styles.partContainer}>
					{/* <Text>{this.state.value}</Text> */}
					<StyledText style={styles.partLabel}>{this.state.value}</StyledText>
					<View style={styles.partLine}></View>
				</TouchableOpacity>
			</RNPickerSelect>
		);
  }
}

export class ClassPicker extends React.Component {

	state = {
		prefix: '7',
		suffix: 'A',
		prefixItems: ['7', '8', '9', '10', '11', '12', '13'],
		suffixItems: ['A', 'B', 'C', 'D', 'Ny']
	}

	componentDidMount() {
		const { prefix, suffix } = this.state
		this.callback(prefix, suffix)
	}

	callback(prefix, suffix) {
		
		this.props.onValueChange && this.props.onValueChange({ prefix, suffix })
	}

  render() {
    return (

			<View style={styles.picker}>

				<ClassPickerPart
					items={this.state.prefixItems}
					onValueChange={value => {
						this.setState({
							prefix: value,
						});
						this.callback(value, this.state.suffix)
					}}
				/>
				<ClassPickerPart
					items={this.state.suffixItems}
					onValueChange={value => {
						this.setState({
							suffix: value,
						});
						this.callback(this.state.prefix, value)
					}}
				/>
			</View>

		);
  }
}

const styles = StyleSheet.create({
	picker: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// backgroundColor: 'yellow'
	},
	partContainer: {
		paddingHorizontal: 8
	},
	partLabel: {
		fontSize: 76,
		height: 96,
		minWidth: 90,
		fontWeight: '600',
		textAlign: 'center',
		// backgroundColor: 'blue',
		fontFamily: 'circular-bold'
	},
	partLine: {
		height: 2,
		borderRadius: 2,
		backgroundColor: '#B9BCFF',
	}
})