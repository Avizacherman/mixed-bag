var React = require('react')
var Link = require('react-router').Link


var Index = React.createClass({
  render: function(){
    return(

      <div>I'M THE INDEX YO
        <div>
          <Link to="/order/join/blah_blah_123">Join</Link>
          <Link to="order/new">New</Link>
        </div>
      </div>
    )
  }
})

module.exports = Index
