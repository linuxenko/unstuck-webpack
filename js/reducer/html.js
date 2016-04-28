
const initialState = {
  enabled : false
}


export default function(state = initialState, action) {

  if (action.type === 'TOGGLE_HTML') {
    state.enabled = !state.enabled

    return Object.assign({}, state)
  }

  return state
}
