// Author: Ahmed Mohey
// Project: ravenous
// Date: 27/05/2019
import React from 'react';
import './BusinessList.css';
import '../Business/Business';
import Business from "../Business/Business";

class BusinessList extends React.Component {
    render() {
      try{return (
          <div className="BusinessList">
              {this.props.businesses.map(business => {
                  return (
                      <Business key={business.id} business={business}/>
                  )
              })}
          </div>
      );}catch(error){
          return null
      }
    }
}

export default BusinessList;