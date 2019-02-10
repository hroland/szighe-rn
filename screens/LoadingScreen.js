import React from 'react';
import {
  StyleSheet,
	SafeAreaView,
	ActivityIndicator,
	Platform,
	Text,
	Alert
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import { API, deviceInfo, getSetupFinished, getUUID } from '../api'

export default class SplashScreen extends React.Component {
  static navigationOptions = {
		header: null,
		left: null,
		headerLeft: null,
		gesturesEnabled: false
	}

	state = {
		response: ''
	}
	
	componentDidMount() {
		// resetNavigation(this)

		const { selectedClass, pushSetting, isTeacher } = this.props.navigation.getParam('data')

		this.setState({ response: JSON.stringify(this.props.navigation.getParam('data')) })

		const submitData = {
			// hash: getUUID(),
			type: Platform.OS,
			class_num: selectedClass.prefix,
			class_char: selectedClass.suffix,
			push_all: !!pushSetting,
			push_only: !pushSetting,
			teacher: isTeacher,
			device: deviceInfo()
		}

		const req = API.post('/register', submitData).then(() => {
			this.setState({ response: req })
			this.props.navigation.navigate('HomeScreen')
		}).catch(err => {
			Alert.alert(
				'Hiba történt',
				err,
				[
					{text: 'OK', onPress: () => console.log('OK Pressed')},
				],
				{ cancelable: false },
			);
		})
	}

	

  render() {
    return (
			<SafeAreaView style={styles.container}>
			
				<ActivityIndicator color="white"></ActivityIndicator>

				<Text style={{color:'white'}}>{this.state.response}</Text>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
	
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0C102D',
	},
});
