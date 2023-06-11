import './cartIcon.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'
// import {createStructuredSelector} from 'reselect'
// import { selectCartProductCount } from '../../Utils/cartSelector'
// import {} from '../../actions/cartAction'


function CartIcon () {
const {cartItems} = useSelector((state) => state.cart)
const amount = cartItems?.reduce((calcQuantity, cartItem,i) =>
     calcQuantity + cartItem.quantity,
0)

    return (
        <div>
            
            <Link to='./cart'>
                <FaShoppingCart className="icon__cart" />
            </Link>
            <span className='icon__number'>{amount}</span>
        </div>
    )
}


export default CartIcon;