import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  /*
    This will return new function with dispatch and getState.
    dispatch - method that sends message out to the application
    getState - method that gives the state of application at the point this is called.
  */
  return (dispatch, getState) => {
    console.log(getState());
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      console.log(resp);
      dispatch(setSearchedRecipes({recipes: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}