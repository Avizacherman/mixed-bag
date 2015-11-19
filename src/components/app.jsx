var React = require('react')
var Link = require('react-router').Link

var App = React.createClass({
  render: function(){
    return(
    <div>
      <div>
        //Topbar (different for Mobile vs. Non Mobile)
        //Sidebar (only present on non-mobile)
        //Bottom copyright thing/contact

      </div>
        <Link to="/order/join/blah_blah_123">Join</Link>
        <Link to="order/new">New</Link>

    {this.props.children}

    </div>
    )
    }
})

module.exports = App
