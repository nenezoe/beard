import {FaTimes,FaGripLines} from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
import './sideNavbar.css'
import NavData from '../NavBar/navData'
import {useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../../reducers/userSlice'
import {useState} from 'react';

function SideNav() {
	const [hidden, setHidden] = useState(true)

	function toggleMenu() { 
		setHidden(!hidden)
	}

    const dispatch = useDispatch()
    function signoutHandler () {
        dispatch(signOutUser())
    }
    
     const user = useSelector((state) => state.user)
  const { users} = user
    return (
			<>
				<FaGripLines className='sidenav__icon-bar' onClick={toggleMenu} />

				{!hidden ? (
					<nav className='sidenav__bar' onClick={toggleMenu}>
						<FaTimes className='sidenav__icon-times' onClick={toggleMenu} />
						<section className='sidenav__links'>
							{NavData.map((item, index) => {
								return (
									<NavLink key={index} to={item.path} className='sidenav__link'>
										<span>{item.title}</span>
									</NavLink>
								);
							})}
							{users ? (
								<NavLink
									to='#signout'
									onClick={signoutHandler}
									className='sidenav__link'>
									Sign Out
								</NavLink>
							) : (
								<NavLink to='/signup' className='sidenav__link'>
									Sign Up
								</NavLink>
							)}

							{users ? (
								<NavLink to='#' className='sidenav__link'>
								{users?.data?.user?.name?.toUpperCase()}
								</NavLink>
							) : (
								<NavLink to='/login' className='sidenav__link'>
									Sign In
								</NavLink>
							)}
						</section>
					</nav>
				) : null}
			</>
		);
}


export default SideNav;