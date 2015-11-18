var React = require('react')


var App = React.createClass({
  render: function(){
    return(
    <div>
      //Topbar (different for Mobile vs. Non Mobile)
      //Sidebar (only present on non-mobile)
      //Bottom copyright thing/contact


      {this.props.children || ""}
    </div>
    )
    }
})

module.exports = App
