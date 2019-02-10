import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { StyledText } from './StyledText'

export class ArrowButton extends React.Component {
  render() {
		return (
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={this.props.onPress}>
				<StyledText style={{ fontSize: 20}} light={true}>{this.props.children}</StyledText>
				<Image
					source={require('../assets/images/small-arrow.png')}
					style={[{width: 16, height: 16, marginLeft: 8, marginTop: 1}, this.props.style]}
				/>
			</TouchableOpacity>
		)
  }
}