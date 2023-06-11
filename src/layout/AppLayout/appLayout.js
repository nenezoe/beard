import React from 'react'
import NavBar from '../../components/NavBar/navBar'
import Footer from  '../Footer/Footer'
import SideNav from '../../components/SideNavbar/sideNavbar'
import './applayout.css'

export default function AppLayout({children}) {
  return (
		<div className='app_layout'>
			<NavBar />
			<SideNav/>
			{children}
			<Footer />
		</div>
	);
}
