import './Cart.css'
import { addToCart, removeCart } from '../../reducers/cartSlice'
import {useDispatch} from 'react-redux'


function Cart ({cartItem}) {
	
	const { name, image, price, quantity } = cartItem
	
const dispatch = useDispatch()

    return (
			<div className='cart'>
				<div className='cart__modal'>
					<img className='cart__img' src={image} alt='products' />
					<div className='cart__items'>
						<h3 className='cart__h1'>{name}</h3>
						<span className='cart__span'>
							{quantity} x #{price}
						</span>
						<div className='span__icon'>
							<span
								className='cart__btn'
								onClick={() => dispatch(removeCart(cartItem))}>
								-
							</span>
							<span>{quantity}</span>
							<span
								className='cart__btn'
								onClick={() => dispatch(addToCart(cartItem))}>
								+
							</span>
						</div>
					</div>
				</div>
			</div>
		);
    
}


export default Cart;