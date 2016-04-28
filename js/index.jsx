import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import store from 'reducer/index'

import Application from 'component/Application.jsx'

import IndexContainer from 'component/IndexContainer.jsx'
import HtmlContainer from 'component/HtmlContainer.jsx'
import JsContainer from 'component/JsContainer.jsx'
import CssContainer from 'component/CssContainer.jsx'


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={IndexContainer} />
        <Route path="html"  component={HtmlContainer} />
        <Route path="js"    component={JsContainer} />
        <Route path="css"   component={CssContainer} />
      </Route>
    </Router>
  </Provider>
,document.getElementById('application'))
