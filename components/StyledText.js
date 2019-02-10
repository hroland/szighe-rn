import React from 'react';
import { Text } from 'react-native';

export class StyledText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: this.props.bold ? 'circular-bold' : 'circular-medium', color: this.props.light ? '#B9BCFF' : '#FFFFFF' }]} />;
	}
}
