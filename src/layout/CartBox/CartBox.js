import './CartBox.css';
import Cart from '../Cart/Cart';
import {NavLink, useHistory, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {PaystackConsumer} from "react-paystack";
import { useState } from 'react';

function CartBox() {
	const {token,users} = useSelector((state) => state.user);
	const {cartItems} = useSelector((state) => state.cart);
	const [amount] = useState(0)
	const [loading, setLoading] = useState(false)
	const [closeModal, setCloseModal] = useState(false)
	let history = useHistory();

	const totalPrice = cartItems?.reduce((calcQuantity, cartItem) =>
	calcQuantity + cartItem.quantity * cartItem.price, 0)

	
	
	return (
		<section className='checkout'>
			<Toaster
				position='bottom-right'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					duration: 5000,
					style: {
						padding: '20px',
						fontSize: '13px',
						fontWeight: 'bolder',
						borderRadius: '15px',
					},
				}}
			/>
			<div className='checkout__text'>
				<h1 className='checkout__h1'>Your cart</h1>
				<p className='checkout__p'>Item ships at checkout</p>
			</div>
			<hr />
			<div>
				<div className='checkout__modal'>
					<div>
						<span>
							{cartItems?.length === 0 && (
								<p className='checkout__p-text'>Your cart is empty</p>
							)}
						</span>
						{cartItems.map((cartItem,i) => (
							
							<div key={i}>
								<Cart  cartItem={cartItem} />
								<hr />
							</div>
						))}
					</div>
				</div>
				<div className='checkout-sm'>
					<div className='checkout__span'>
						<span>Total:₦{totalPrice}</span>
					</div>
					<div className='checkout-btn'>
					{cartItems?.length === 0 ?
					<button onClick={() => history.push("/shop")}>
						Start Shopping
						</button> :
						<>
						{token ?  <button onClick={() => history.push("/checkout")}>
			         Process to Checkout
			        </button> : <Redirect to='/login' />}
						</>
		   	}
					</div>

				</div>
				<hr />
			</div>
		</section>
	);
}


export default CartBox;

