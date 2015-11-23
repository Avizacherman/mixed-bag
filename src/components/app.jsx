var React = require('react')
var RaisedButton = require('../../node_modules/material-ui/lib/raised-button')
var Link = require('react-router').Link

console.log(RaisedButton)

var App = React.createClass({
  render: function(){
    return(
    <div>
      <div>
        //Topbar (different for Mobile vs. Non Mobile)
        //Sidebar (only present on non-mobile)
        //Bottom copyright thing/contact

      </div>

        <RaisedButton><Link to="/order/join/blah_blah_123">Join</Link></RaisedButton>
        <RaisedButton><Link to="order/new">New</Link></RaisedButton>

    {this.props.children}

    </div>
    )
    }
})

module.exports = App
