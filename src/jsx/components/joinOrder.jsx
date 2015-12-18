var React = require('react')

var JoinOrder = React.createClass({
  render: function(){
    return(
      <div>{this.props.params.uniqueID}</div>
    )
  }
})

module.exports = JoinOrder
