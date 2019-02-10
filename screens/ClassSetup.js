import React from 'react';
import {
  StyleSheet,
	View,
	SafeAreaView,
	TouchableOpacity,
	Text
} from 'react-native';

import { NavHeader } from '../components/NavHeader';
import { NextButton } from '../components/NextButton';
import { AppFooter } from '../components/AppFooter';
import { StyledText } from '../components/StyledText';
import { Spacing } from '../components/Spacing';
import { ArrowButton } from '../components/ArrowButton';

import { ClassPicker } from '../components/ClassPicker';

export default class ClassSetup extends React.Component {
  static navigationOptions = {
		header: null
	}
	
	state = {
		selectedClass: null,
	}

	submit() {
		this.props.navigation.navigate('PushSetup', { data: { selectedClass: this.state.selectedClass, isTeacher: false }})
	}

	submitTeacher() {
		this.props.navigation.navigate('LoadingScreen', { data: { selectedClass: this.state.selectedClass, isTeacher: true, pushSetting: true }})
	}

  render() {
    return (
			<SafeAreaView style={styles.container}>

				<NavHeader navigation={this.props.navigation} showBack={true} />

				<View style={styles.content}>

					<Spacing height={60} />
			
					<StyledText style={{ fontSize: 22, marginBottom: 10 }} light={true}>
						Melyik osztályba jársz?
					</StyledText>

					<ClassPicker onValueChange={ selectedClass => this.setState({ selectedClass }) } />

					<Spacing height={80} />

					<NextButton onPress={() => { this.submit() }} />

					<Spacing height={70} />

					<ArrowButton onPress={() => { this.submitTeacher() }}>Tanár vagyok</ArrowButton>

					<Text style={{color: 'white'}}>{JSON.stringify(this.state.selectedClass) || '?'}</Text>
				
				</View>

				<AppFooter></AppFooter>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

	classPicker: {
		flex: 1,
		flexDirection: 'column'
	},
	
  container: {
    flex: 1,
		backgroundColor: '#0C102D',
	},
	content: {
		flex: 1,
		paddingHorizontal: 30,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
