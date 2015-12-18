window.jQuery = window.$ = require('jquery')

var React = require('react')
var ReactDOM = require('react-dom')
var bootstrap = require('bootstrap-sass')
var ReactRouter = require('react-router')

var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute

var App = require('./components/app.jsx')
var User = require('./components/user.jsx')
var Order = require('./components/order.jsx')
var NewOrder = require('./components/newOrder.jsx')
var JoinOrder = require('./components/joinOrder.jsx')
var Base = require('./components/base.jsx')

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
