import React, { Component } from 'react'
import ReactNative from 'react-native'
// takes in state and actions, and will wrap the component we give it
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

const {
	View,
	Text,
} = ReactNative

class AppContainer extends Component {
	render() {
		return <View>
			<Text style={{marginTop: 20}}>
				I am App Container!
			</Text>
		</View>
	}

}


function mapDispatchToProps(dispatch) {
	// dispatching actions to the rest of the application
	// Takes all the action creators in the app, and passes in dispatch
	// Gives us a way of centrally dispatching actions throughout the entire app.
	return bindActionCreators(ActionCreators, dispatch);
}

// First arg of connect is the store, which starts off as empty, {}
// connect takes in 2 functions. connect wires up store and mapDispatchToProps
export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);