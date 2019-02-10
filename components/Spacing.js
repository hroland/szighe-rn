import React from 'react';
import { View } from 'react-native';

export class Spacing extends React.Component {
  render() {
    return <View style={{ height: this.props.height || 0 }} />;
  }
}