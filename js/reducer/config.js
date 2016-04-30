export default function(state = {}, action) {

  if (action.type === 'CONFIG_TEMPLATE') {
    state.template = action.payload.template
    return Object.assign({}, state)
  }

  if (action.type === 'CONFIG_GENERAL_TARGET') {
    if (action.payload.plugin !== null) {
      state[action.payload.plugin][action.payload.option] = action.payload.target
    } else {
      state[action.payload.option] = action.payload.target
    }
    return Object.assign({}, state)
  }

  if (action.type === 'CONFIG_TOGGLE_PLUGIN') {
    state[action.payload.plugin].enabled = action.payload.checked
    return Object.assign({}, state)
  }

  return state
}
