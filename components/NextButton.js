import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Animated, Easing } from 'react-native';

export class NextButtonIcon extends React.Component {

	state = {
    nudgeAnim: new Animated.Value(0)
  }

  componentDidMount () {
    this.startAnimation()
  }

  startAnimation () {
		
		Animated.loop(
			Animated.sequence([
				Animated.timing(this.state.nudgeAnim, {
					toValue: 1,
					duration: 500,
					delay: 0
				}),
				Animated.timing(this.state.nudgeAnim, {
					toValue: 0,
					duration: 500
				})
			])
		).start()
  }

	render () {
		return (
			<Animated.Image
					source={require('../assets/images/next-button.png')}
					style={[{width: 36, height: 36},
            {transform: [
              {translateX: this.state.nudgeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  -3, 3
                ]
              })}
            ]},
						this.props.style && {...this.props.style}]}
				/>
		)
	}
}

export class NextButton extends React.Component {
	constructor(props){
    super(props)
  }
  render() {
    return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				<NextButtonIcon />
			</TouchableOpacity>
    );
	}
}

const styles = StyleSheet.create({
	button: {
		alignSelf: 'center',
		padding: 16,
		// backgroundColor: 'red'
	}
})