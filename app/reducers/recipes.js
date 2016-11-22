import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {
	[types.SET_SEARCHED_RECIPES](state, action) {
		let newState = {};
		action.recipes.forEach((recipe) => {
			let id = recipe.href
			newState[id] = Object.assign({}, recipe, { id });
		});
		return newState;
	}
})

export const recipeCount = createReducer(0, {
	// listen for ADD_RECIPE, and modify state accordingly
	// everytime state is returned, a new object is returned.
	[types.SET_SEARCHED_RECIPES](state, action) {
		return action.recipes.length;
	},
	[types.ADD_RECIPE](state, action) {
		return state + 1;
	}
})