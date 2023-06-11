import './Shop.css';
import Product from '../../layout/Product/Product';


function Shop() {
	return (
		<>
			<div className='shop_container'>
				<section>
					<p>Shop</p>
				</section>
				<div>
					<Product />
				</div>
			</div>
		</>
	);
}
export default Shop
