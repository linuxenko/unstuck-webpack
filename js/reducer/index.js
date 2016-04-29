import {createStore, combineReducers} from 'redux'

import html from 'reducer/html'
import js   from 'reducer/js'
import css  from 'reducer/css'
import fw   from 'reducer/fw'

const store = createStore(
  combineReducers({
    html,
    js,
    css,
    fw
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default store
