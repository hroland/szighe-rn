import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { createRootNavigator } from './navigation';
import { API, getSetupFinished } from './api'

export default class App extends React.Component {
  state = {
		isLoadingComplete: false,
		isSetupFinished: null
	};
	
	async componentDidMount() {
		
		this.state.isSetupFinished = await getSetupFinished()
	}

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen && this.state.isSetupFinished == null) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
			const RootNavigator = createRootNavigator(this.state.isSetupFinished)
      return (
        <View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
					<RootNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/back.png'),
				require('./assets/images/next-button.png'),
				require('./assets/images/check.png'),
				require('./assets/images/small-arrow.png'),
      ]),
      Font.loadAsync({
				'circular-bold': require('./assets/fonts/CircularStd-Bold.otf'),
				'circular-medium': require('./assets/fonts/CircularStd-Medium.otf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
