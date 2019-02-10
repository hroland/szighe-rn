import React from 'react';
import {
  StyleSheet,
	View,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

import { NavHeader } from '../components/NavHeader';
import { AppFooter } from '../components/AppFooter';
import { StyledText } from '../components/StyledText';
import { configFlow } from '../navigation'; 

export default class HomeScreen extends React.Component {
  static navigationOptions = {
		header: null
	}
	
	state = {
		notificationsAllowed: true
	}

  render() {
    return (
			<SafeAreaView style={styles.container}>

				<NavHeader></NavHeader>

				<View style={styles.content}>

					{ !notificationsAllowed ? 
						<View>
							<StyledText style={{ fontSize: 32, marginBottom: 22 }}>Kész is vagy!</StyledText>
							<StyledText style={{ fontSize: 22 }}>Mostantól értesítéseket fogsz kapni a helyettesítés változásáról</StyledText>

							<TouchableOpacity style={{ marginTop: 76 }}>
								<StyledText style={{ fontSize: 20 }} light={true}>Osztály/értesítés átállítása</StyledText>
							</TouchableOpacity>

							<TouchableOpacity style={{ marginTop: 44 }}>
								<StyledText style={{ fontSize: 20 }} light={true}>Osztály/értesítés átállítása</StyledText>
							</TouchableOpacity>

						</View>
						:
						<View>
							<StyledText style={{ fontSize: 32, marginBottom: 22 }}>Nem engedélyezted az értesítéseket :(</StyledText>
							<StyledText style={{ fontSize: 22 }}>Keresd meg a telefon beállításokban az opciót vagy töröld le és telepítsd újra az appot</StyledText>
						</View>
					}
				
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
		alignItems: 'center',
		width: 280
	}
});
