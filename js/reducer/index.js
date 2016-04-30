import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import PersistLocal from 'reducer/persist'

import html from 'reducer/html'
import js   from 'reducer/js'
import css  from 'reducer/css'
import fw   from 'reducer/fw'
import tabs from 'reducer/tabs'

import defaultState from 'reducer/initialState'
const {read, write} = PersistLocal('unstuck-webpack')
const localState = read()
const initialState = localState === null ? defaultState : localState

const store = createStore(
  combineReducers({
    html,
    js,
    css,
    fw,
    tabs
  }),
  initialState,
  compose(
    applyMiddleware(write),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
