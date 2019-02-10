import React from 'react';
import {
  StyleSheet,
	View,
	SafeAreaView
} from 'react-native';

import { NavHeader } from '../components/NavHeader';
import { NextButton } from '../components/NextButton';
import { AppFooter } from '../components/AppFooter';
import { StyledText } from '../components/StyledText';
import { Spacing } from '../components/Spacing';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
		header: null
  }

  render() {
    return (
			<SafeAreaView style={styles.container}>

				<NavHeader navigation={this.props.navigation}></NavHeader>

				<View style={styles.content}>
			
					<StyledText style={{ fontSize: 25, width: 260 }} light={true}>
						{`Te is utálsz bejönni amikor nem is kéne?\n\nFolyton a honlapot frissíteni?`}
					</StyledText>

					<Spacing height={60} />


					<NextButton onPress={
						() => this.props.navigation.navigate('ClassSetup')
					}/>
				
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
		paddingHorizontal: 30,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
