import initialState from 'reducer/initialState'

export default function(state = {}, action) {

  if (action.type === 'RESET') {
    let init = Object.assign({}, initialState.css)
    init.transpiller = Object.assign({}, initialState.css.transpiller)
    return init
  }

  if (action.type === 'TOGGLE_CSS') {
    state.enabled = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'CSS_SELECT_TRANSPILLER') {
    state.transpiller[action.payload.transpiller] = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'CSS_TOGGLE_AUTOPREFIX') {
    state.autoprefix = action.payload.checked
    return Object.assign({}, state)
  }

  return state
}
