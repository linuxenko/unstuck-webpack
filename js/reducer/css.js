const initialState = {
  enabled : true
}


export default function(state = initialState, action) {

  if (action.type === 'TOGGLE_CSS') {
    state.enabled = action.payload.checked

    return Object.assign({}, state)
  }

  return state
}
