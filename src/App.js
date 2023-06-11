import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CartBox from './layout/CartBox/CartBox';
import CheckOut from './layout/CheckOut/CheckOut';
import Shop from './pages/Shop/Shop'; 
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp'
import Home from './pages/Home/Home';
import Product from './layout/Product/Product';
import AppLayout from './layout/AppLayout/appLayout';

function App () {

  return (
		<Router>
			<div className='App'>
				<AppLayout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/signup' component={SignUp} />
						<Route path='/login' component={SignIn} />
						<Route path='/shop' component={Shop} />
                        <Route path='/product/:id' component={Product} />
						<Route path='/cart' component={CartBox} />
						<Route path='/checkout' component={CheckOut} />
					</Switch>
				</AppLayout>
			</div>
		</Router>
	);
}

export default App;
