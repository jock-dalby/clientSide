import React from 'react'

const CustomerDetails = ({customer}) => (
  <div className="item">
    <div className="itemtitle">
      {customer.name}, select where to pick up your order:
    </div>
  </div>
)

export default CustomerDetails
