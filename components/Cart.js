import React, { Component } from 'react'
import CartItem from './CartItem'
import UserForm from './UserForm'

class Cart extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const coffees = this.props.order.orderCoffees
		return (
			<div className="cartitems">
				{Object.keys(coffees).map((key, index) => {
					return (
						<CartItem coffee={coffees[key]} key={index} id={key} {...this.props} />
					)
				})}
				<div className="cartfooter">
					<UserForm />
				</div>
			</div>
		)
	}
}

export default Cart