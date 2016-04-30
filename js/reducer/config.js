export default function(state = {}, action) {

  if (action.type === 'CONFIG_TEMPLATE') {
    state.template = action.payload.template

    return Object.assign({}, state)
  }

  return state
}
