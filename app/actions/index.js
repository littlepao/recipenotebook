/* All recipe actions, to star, unstar, set search recipes. All these actions are going to 
be functions that will be described in recipes.js file. This syntax will import all of them
as an object, and merge them with any other actions in the application. Return all the actions
as ActionCreators. This is a Manifest file that describes all the actions in the app. */


import * as RecipeActions from './recipes';

export const ActionCreators = Object.assign({},
	RecipeActions,
);