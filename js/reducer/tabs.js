export default function(state = {}, action) {

  if (action.type === 'TAB_DEFAULT') {
    state[action.payload.page] = action.payload.tab
    return Object.assign({}, state)
  }

  return state
}
