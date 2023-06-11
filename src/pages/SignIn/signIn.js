import './signIn.css';
import { Link } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Button from '../../components/Button/Button';
// import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../reducers/userSlice';
import { Redirect } from 'react-router-dom';
import UAuth, { UserInfo } from "@uauth/js";
import toast from 'react-hot-toast';
import { validate } from 'email-validator';
import Input from '../../components/Input';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [dirty, setDirty] = useState(false);

	// const [udInfo, setUdInfo] 
	const [udUser, setUdUser] = useState();
	const [uauth, setUAuth] = useState();

	const dispatch = useDispatch();

	const users = useSelector((state) => state?.user);
	const { token} = users;

	useEffect(() => {
		const uauthLogin = new UAuth({
			clientID: "4f84c942-8529-42dd-89c3-fb10986e133a",
			redirectUri: window.location.origin,
			// redirectUri: "http://localhost:3000",
			scope: "openid wallet"
		  });
		  setUAuth(uauthLogin);
	},[])

	const handleUD = async () => {
		if(!udUser){
			console.log(uauth);
			try {
				console.log(uauth);
				const authorization = await uauth.loginWithPopup();
				window.location.reload();
			
				// console.log(authorization);
			  } catch (error) {
				console.error(error);
			  }
		} else {
			await uauth.logout();
			window.location.reload();
		}
		
	}

	useEffect(() => {
		if(uauth == undefined){
			return;
		}
		uauth.user()
		  .then((user) => {
			setUdUser(user)
		  })
		  .catch((e) => {
			console.log(e)
		  })
		  console.log(window.location.href, 'helllllooooooooo');
		  
	
	  }, [uauth])

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		if (!dirty && !disabled) {
			setDirty(true);
		}

		const data = {
			email: email,
			password: password,
		};
		try {
			dispatch(signInUser(data));
			setLoading(false);
		} catch ({ error }) {
			setLoading(false);
		}
	};

	const handleValidation = useCallback(() => {
		const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);

		if (dirty) {
			setDisabled(!validate(email) || password.length < 7 || !validPassword);
		}
	}, [email, password, dirty]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);

	return (
		<>
			<section className='container-fluid signin__box'>
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
				<h1 className='sign__h1'>Welcome back!</h1>
				<p className='sign__p'>Please sign in below to continue</p>
				<section className='form__btn'>
			
							<button onClick={handleUD}>{udUser ? udUser.sub : 'Login with Unstoppable'}</button>
							</section>
				<form onSubmit={handleSubmit}>
					<section>	
						<Input
							type='email'
							htmlFor='email'
							value={email || ''}
							placeholder='Email'
							label="Email"
							onChange={setEmail}
							name='email'
						/>
					</section>

					<section>
						<Input
							type='password'
							htmlFor='password'
							value={password || ''}
							placeholder='Password'
							onChange={setPassword}
							name='password'
							label="Password"
						/>
					</section>
					<section className='form__btn'>
						{token ? (
							<Redirect to='/shop' />
						) : (
							<Button
								type='submit'
								name='button'
								disabled={disabled}
								loading={loading}>
								SignIn
							</Button>
						)}
					</section>
				</form>
				<section className='forget__links'>
					{/* <Link className='forget--link' to='/forget-password'>Forget Password?</Link> */}
					{/* <Link className='forget--link' to='/forget-email'>Forget Email?</Link> */}
				</section>
				<section className='signup__link'>
					<Link
						className='forget__link'
						to='/signup'>
						Not a member?Join us!
					</Link>
				</section>
			</section>
			{/* <Footer /> */}
		</>
	);
}

export default SignIn;
