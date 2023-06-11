import './Product.css';
import { useEffect} from 'react';
import { addToCart } from '../../reducers/cartSlice';
// import { getProducts } from '../../actions/productAction';
import { useDispatch, useSelector, } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';
import { getProduct } from '../../reducers/productSlice'

function Product() {
	const dispatch = useDispatch();

	const {products, loading } = useSelector((store) => store?.product);

useEffect(() => {
	dispatch(getProduct())
},[dispatch])

	return (
		<>
			<div className='product__items'>
				  {loading ? (
					<Spinner />
				) : ( 
				
					products?.products?.map((data) => (
						<div className='product__lists' key={data?._id}>
			
							<figure>
								<img
									className='product__img'
									src={data?.image}
									alt={data?.name}
								/>
							</figure>

							<p className='product__text'>{data?.name}</p>

							<p className='product__text'>₦{data?.price}</p>
							{/* </div> */}
							<button
								className='products__btn'
								onClick={() => dispatch(addToCart(data))}
								>
								Add
							</button>
						</div>
					))
				)} 
			</div>
		</>
	);
}


export default Product;
