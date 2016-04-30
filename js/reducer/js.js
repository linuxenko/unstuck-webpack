export default function(state = {}, action) {

  if (action.type === 'TOGGLE_JS') {
    state.enabled = action.payload.checked

    return Object.assign({}, state)
  }

  return state
}
