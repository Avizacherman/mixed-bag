
import React from 'react'
import RaisedButton from '../../../node_modules/material-ui/lib/raised-button'
import History from 'react-router'


let App = React.createClass({
  mixins: [ History ],
  render(){
    return(
    <div>
      <div>
        //Topbar (different for Mobile vs. Non Mobile)
        //Sidebar (only present on non-mobile)
        //Bottom copyright thing/contact

      </div>

        <RaisedButton onClick={()=>this.history.pushState(null, "/order/join/blah_blah_123")}label="Join"/>
        <RaisedButton onClick={()=>this.history.pushState(null, "order/new")}label="New"/>

    {this.props.children}

    </div>
    )
    }
})

export { App }
