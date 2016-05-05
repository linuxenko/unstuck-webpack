import initialState from 'reducer/initialState'

export default function(state = [], action) {

  if (action.type === 'RESET') {
    return initialState.fw.slice()
  }

  if (action.type === 'FW_ADD_FRAMEWORK') {
    if (state.indexOf(action.payload.fw) === -1) {
      return [action.payload.fw,...state]
    }
    return [...state]
  }

  if (action.type === 'FW_REMOVE_FRAMEWORK') {
    let idx = state.indexOf(action.payload.fw)
    return state.slice(0, idx).concat(state.slice(idx + 1))
  }

  return state
}
