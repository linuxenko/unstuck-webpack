import initialState from 'reducer/initialState'

export default function(state = {}, action) {

  if (action.type === 'RESET') {
    let init  = Object.assign({}, initialState.config)
    init.vendors = []
    return init
  }

  if (action.type === 'TOGGLE_VENDOR') {
    if (action.payload.checked === true) {
      if (state.vendors.indexOf(action.payload.vendor) !== -1) {
        return Object.assign({}, state)
      }
      state.vendors.push(action.payload.vendor)
    } else {
      let idx = state.vendors.indexOf(action.payload.vendor)
      if (idx > -1) {
        state.vendors = state.vendors.slice(0, idx).concat(state.vendors.slice(idx + 1))
      }
    }
    return Object.assign({}, state)
  }

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
