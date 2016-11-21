import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {
})

export const recipeCount = createReducer(0, {
	// listen for ADD_RECIPE, and modify state accordingly
	// everytime state is returned, a new object is returned.
	[types.ADD_RECIPE](state, action) {
		return state + 1;
	}
})