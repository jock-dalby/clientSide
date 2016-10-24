import React from 'react'

// const { coffee, store, shop, addCoffeeToOrder } = this.props
// (under render function in ES6 class-style notation)

//onClick={() => addCoffeeToOrder(coffee.coffee_id, coffee.type)}
// ^ alternative onClick

const Shop = ({shop, updateOrder}) => (
  <div
    className="item"
    onClick={() => updateOrder(shop)}
  >
    <img
      alt="coffee image"
      className="itemimage"
      src={shop.image}
    />
    <div className="itemdetails">
      <div className="itemtitle">{shop.shop_name}</div>
      <div>Phone: {shop.shop_phone}</div>
      <div>Website: {shop.website}</div>
      <div>Rating: {shop.rating}</div>
      <div>Price: ${shop.total}</div>
      <div>This store is {shop.distance < 1000 ? '' + shop.distance + 'm' : '' + shop.distance/1000 + 'Km'} away</div>
      <div className="itemdescription">{shop.description}</div>
    </div>
  </div>
)

export default Shop