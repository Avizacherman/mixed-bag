var React = require('react')
var RaisedButton = require('../../node_modules/material-ui/lib/raised-button')
var Link = require('react-router').Link
var History = require('react-router').History


var App = React.createClass({
  mixins: [ History ],
  render: function(){
    return(
    <div>
      <div>
        //Topbar (different for Mobile vs. Non Mobile)
        //Sidebar (only present on non-mobile)
        //Bottom copyright thing/contact

      </div>

        <RaisedButton onClick={()=>this.history.pushState(null, "/order/join/blah_blah_123")}>Join</RaisedButton>
        <RaisedButton onClick={()=>this.history.pushState(null, "order/new")}>New</RaisedButton>

    {this.props.children}

    </div>
    )
    }
})

module.exports = App
