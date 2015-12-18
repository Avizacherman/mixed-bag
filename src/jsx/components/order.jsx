var React = require('react')

var Order = React.createClass({
  render: function(){
   return (
     <div>
       {this.props.children || "bienveniue"}
     </div>)
 }
 })


module.exports = Order
