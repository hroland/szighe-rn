import React from 'react';
import {
  StyleSheet,
	View,
	SafeAreaView,
	Text
} from 'react-native';

import { NavHeader } from '../components/NavHeader';
import { NextButton } from '../components/NextButton';
import { AppFooter } from '../components/AppFooter';
import { StyledText } from '../components/StyledText';
import { Spacing } from '../components/Spacing';

import { PushPicker } from '../components/PushPicker';

export default class PushSetup extends React.Component {
  static navigationOptions = {
		header: null
	}
	
	state = {
		pushSetting: true,
		isTeacher: false,
		selectedClass: {},
		data: ''
	}

	componentDidMount() {

		const { isTeacher, selectedClass } = this.props.navigation.getParam('data')

		this.setState({ isTeacher, selectedClass })

		if (isTeacher) {
			// this.submit()
		}
	}

	submit() {

		const { pushSetting, isTeacher, selectedClass } = this.state
		
		this.props.navigation.navigate('LoadingScreen', { data: { selectedClass, isTeacher, pushSetting } })
	}

  render() {
    return (
			<SafeAreaView style={styles.container}>

				<NavHeader navigation={this.props.navigation} showBack={true} />

				<View style={styles.content}>
			
					<StyledText style={{ fontSize: 21, marginBottom: 18, textAlign: 'center' }} light={true}>
						Mikor szeretnél értesítést kapni?
					</StyledText>

					<PushPicker onValueChange={ setting => this.setState({ pushSetting: setting }) } />

					<Spacing height={40} />

					<NextButton onPress={() => this.submit()}></NextButton>

					<Text style={{color: 'white'}}>{this.state.data}</Text>

					{/* <StyledText>{this.state.pushSetting ? 'true' : 'false'}</StyledText> */}
				
				</View>

				<AppFooter></AppFooter>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({


	
  container: {
    flex: 1,
		backgroundColor: '#0C102D',
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'stretch',
		// backgroundColor: 'green'
	}
});
