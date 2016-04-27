import {createStore} from 'redux'

const store = createStore(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default store
