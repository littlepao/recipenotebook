export default function createReducer(initialState, handlers) {
	// handlers - different action types you are listening for
	/* calls that actionType for that state and that action eliminates the need 
			to write a switch statement every time we want to create a reducer. */
  return function reducer(state=initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}