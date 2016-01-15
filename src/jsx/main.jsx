window.jQuery = window.$ = require('jquery')

import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'bootstrap-sass'
import { Router, Route, Link, IndexRoute } from 'react-router'

import App from './components/app'
import User from './components/user'
import Order from './components/order'
import NewOrder from './components/newOrder'
import JoinOrder from './components/joinOrder'
import Base from './components/base'

ReactDOM.render((
  <Router>
    <Route path ="/" component={App}>
    <IndexRoute component={Base}/>
      <Route path="user/:id" component={User}/>
      <Route path="order" component={Order}>
        <Route path="new" component={NewOrder}/>
        <Route path="join/:uniqueID" component={JoinOrder}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('content'))
