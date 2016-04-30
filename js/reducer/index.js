import {createStore, combineReducers, applyMiddleware} from 'redux'
import PersistLocal from 'reducer/persist'

import html from 'reducer/html'
import js   from 'reducer/js'
import css  from 'reducer/css'
import fw   from 'reducer/fw'

import defaultState from 'reducer/initialState'
const {read, write} = PersistLocal('unstuck-webpack')
const localState = read()
const initialState = localState === null ? defaultState : localState

const store = createStore(
  combineReducers({
    html,
    js,
    css,
    fw
  }),
  initialState,
  applyMiddleware(write)
)

console.log(store.getState())
export default store
