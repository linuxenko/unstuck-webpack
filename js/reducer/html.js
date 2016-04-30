export default function(state = {}, action) {

  if (action.type === 'TOGGLE_HTML') {
    state.enabled = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'TOGGLE_HTML_TEMPLATE') {
    state.templates[action.payload.template].enabled = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'SET_HTML_TEMPLATE_TARGET') {
    state.templates[action.payload.template].target = action.payload.target
    return Object.assign({}, state)
  }

  return state
}
