import { useSelector } from 'react-redux';
import Input from '../../components/Input';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {PaystackConsumer} from "react-paystack";
import { useState } from 'react';
import './CheckOut.css'
import {Redirect} from 'react-router-dom'
 function CheckOut(){
	const {users} = useSelector((state) => state.user);
    const {cartItems} = useSelector((state) => state.cart);
	const [amount] = useState(0)
	const [closeModal, setCloseModal] = useState(false)
    const totalPrice = cartItems?.reduce((calcQuantity, cartItem) =>
	calcQuantity + cartItem.quantity * cartItem.price, 0)

	  //Paystack Config
	  const config = {
		reference: new Date().getTime().toString(),
		email: users?.email,
		amount:  totalPrice * 100,
		publicKey: "pk_test_f8300ac84ffd54afdf49ea31fd3daa90ebd33275",
	  };
	
	  const componentProps = {
		...config,
		text: "Make a Deposit",
		onSuccess: reference => handleSuccess(reference, amount),
		onClose: closeModal,
	  };
	
	  const handleSuccess = (amount, reference) => {
		let transactionDetails = amount;
		transactionDetails.amount = reference;
		if(transactionDetails.message === "Approved"){
			toast.success('Order Placed Successfully')
			return cartItems = []
		}else{
			toast.error('Order Placed Failed')
		}
		

	  };

    return (
        <div className='all-check'>
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
        <div className='check-input'>
        <div className='input-item'>
        <Input
							type='text'
							// value={email || ''}
							placeholder='First Name'
                            label='First Name'
							// onChange={setEmail}
							name='firstName'
						/>
                        <Input
							type='text'
							// value={email || ''}
							placeholder='Last Name'
							label='Last Name'
							// onChange={setEmail}
							name='lastName'
						/>
        </div>
                       <div className='input-item'>
                       <Input
							type='email'
							// value={email || ''}
							placeholder='Email'
							label='Email'
							// onChange={setEmail}
							name='email'
						/>
                        <Input
							type='text'
							// value={email || ''}
							placeholder='Address'
							label='Address'
							// onChange={setEmail}
							name='address'
						/>
                       </div>
                       <div className='input-item'>
                       <Input
							type='text'
							// value={email || ''}
							placeholder='Phone Number'
							label='Phone Number'
							// onChange={setEmail}
							name='phone'
						/>
                        <Input
							type='text'
							// value={email || ''}
							placeholder='State'
							label='State'
							// onChange={setEmail}
							name='state'
						/>
                       </div>
                       <div>
						<div>
						<label>Description</label>
						</div>
					   <textarea
							type='ext'
							// value={email || ''}
							placeholder='Description'
							// onChange={setEmail}
							name='description'
						/>
					   </div>
        </div>
        <div className='check-box'>
        <div className='check'>
        <div>
           <h2>Your Orders</h2>
           <hr />
           </div>
            {cartItems.map((cartItem,i) => (
               <div className='' key={i}>
                 <div className=''>
                 <p className='cart__h1'>Name: {cartItem?.name}</p>
                <p className='cart__h1'>Price: #{cartItem?.price}</p>
                  <p className='cart__h1'>Qty: {cartItem?.quantity}</p>
               </div>
               <hr />
           </div>
            ))}
            <div>
            <p className='cart__h1'>Shipping: Free</p>
              <p className='cart__h1'>Total: {totalPrice}</p>
            </div>
			<PaystackConsumer {...componentProps}>
                    {({initializePayment}) => (
						 <button  onClick={() =>initializePayment(handleSuccess, closeModal)}>Place Order</button>		
		       )}
        </PaystackConsumer>
           
        </div>
    </div>
   </div>
    )
}

export default CheckOut;