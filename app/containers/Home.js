import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
	ScrollView,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight,
	StyleSheet,
} = ReactNative
import { connect } from 'react-redux'

class Home extends Component {
	searchPressed() {
		/*
			The action 'fetchRecipes' would be accessible through props
			Because of the destruct ('...props') in AppContainer, all props from AppContainer
			would get passed into the HomeContainer, so all actions from ActionCreators
			are accessible here.
		*/
		this.props.fetchRecipes('bacon,cucumber,banana')
	}

	// search at the top, and ScrollView on the bottom.
	render() {
		return <View style={{marginTop: 20}}>
			<View>
				<TouchableHighlight onPress={ () => this.searchPressed() }>
					<Text>Fetch Recipes</Text>
				</TouchableHighlight>
			</View>
			<ScrollView>
			</ScrollView>
		</View>
	}
}

function mapStateToProps(state) {
	// This searchedRecipes comes from the reducer
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home);