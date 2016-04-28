const initialState = {
  enabled : false
}


export default function(state = initialState, action) {

  if (action.type === 'TOGGLE_JS') {
    state.enabled = !state.enabled

    return Object.assign({}, state)
  }

  return state
}
