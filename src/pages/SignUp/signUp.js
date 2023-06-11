import './signUp.css';
import { useState, useCallback,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../reducers/userSlice';
// import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';
import { Redirect } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { validate } from 'email-validator';
import Input from '../../components/Input'

import { Toaster } from 'react-hot-toast';
import Button from '../../components/Button/Button';

function SignUp() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(false)
    const [dirty, setDirty] = useState(false);

	const dispatch = useDispatch();

	const users = useSelector((state) => state.user);
	const {token} = users;

	const handleSubmit = (e) => {
		setLoading(true)
		e.preventDefault();
		if (!dirty && !disabled) {
			setDirty(true)
		}
		const data = {
			name: name,
			lastName: lastName,
			email: email,
			password: password
			}
		try {
            dispatch(signUpUser(data));		
			setLoading(false);
		} catch ({ error }) {
			setLoading(false)
		}
	};

	 const handleValidation = useCallback(() => {
  
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])



	return (
		<div className='container-fluid signup__box'>
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
			<div className='signup__field'>
				<p className='signup__p'>Please sign up below to continue</p>
				<form className='signup__form' onSubmit={handleSubmit}>
					<section>
						<Input
							type='name'
							htmlFor='name'
							value={name}
							placeholder='Name'
							label='Name'
							required
							onChange={setName}
						/>
					</section>
					<section>
						<Input
							type='lastname'
							id='lastname'
							htmlFor='lastname'
							value={lastName}
							placeholder='Last Name'
							label='Last Name'
							onChange={setLastName}
						/>
					</section>
					<section className='signup__container'>
						<Input
							type='email'
							id='email'
							htmlFor='email'
							value={email}
							placeholder='Email'
							label='Email'
							onChange={setEmail}
						/>
					</section>
					<section className='signup__container'>
						<Input
							type='password'
							id='password'
							htmlFor='password'
							value={password}
							placeholder='Password'
							label='Password'
							onChange={setPassword}
						/>
					</section>

					<section className='signup__btn'>
						{token ? (
							<Redirect to='/' />
						) : (
							<Button type='submit' name='button' loading={loading} disabled={disabled}>
								Sign Up
							</Button>
						)} 
					</section>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
