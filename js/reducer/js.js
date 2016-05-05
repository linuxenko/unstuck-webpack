import initialState from 'reducer/initialState'

export default function(state = {}, action) {

  if (action.type === 'RESET') {
    let init = Object.assign({}, initialState.js)
    init.transpiller = Object.assign({}, initialState.js.transpiller)
    return init
  }

  if (action.type === 'TOGGLE_JS') {
    state.enabled = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'JS_TOGGLE_LINTER') {
    state.linter = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'JS_SELECT_TRANSPILLER') {
    state.transpiller[action.payload.transpiller] = action.payload.checked
    return Object.assign({}, state)
  }

  if (action.type === 'JS_SELECT_SOURCEMAP') {
    state.sourceMap = action.payload.sourcemap
    return Object.assign({}, state)
  }

  return state
}
