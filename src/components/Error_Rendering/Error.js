// Author: Ahmed Mohey
// Project: ravenous
// Date: 09/06/2019
import React from 'react'

class Error extends React.Component {
    render(){
        return (
            <div className="BusinessList">
                <h3>{this.props.Error}</h3>
            </div>
        )
    }
}
export default Error