import './Button.css';
import {useSelector} from 'react-redux'
import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';

function Button({children,loading}) {
	return <button className='custom__button'>
	  {loading ? <BtnSpinner/> : <>{children}</>}
	</button>;
}

export default Button;
