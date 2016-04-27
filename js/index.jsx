import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import store from 'reducer/index'

import Application from 'component/Application.jsx'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>

      </Route>
    </Router>
  </Provider>
,document.getElementById('application'))
