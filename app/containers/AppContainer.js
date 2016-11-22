import React, { Component } from 'react'
import ReactNative from 'react-native'
// takes in state and actions, and will wrap the component we give it
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home'

class AppContainer extends Component {
	/*
	AppContainer serves as a way to have all possible actions when necessary, but it's the
	individual page/container responsibility to describe what portions of the state
	it cares about and what it wants to listen for.
	*/
	render() {
		// Home view will describe how to connect to different elements of the state
		return <Home {... this.props} />
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
export default connect((state) => { return {}
	// state, the parameter passed in, is actually the global state of the application
}, mapDispatchToProps)(AppContainer);