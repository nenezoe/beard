import './Footer.css'
import
    {
        FaFacebook,
        FaInstagram,
        FaTwitter,
        FaYoutube
    } from 'react-icons/fa'

 

function Footer()
{
    return (
			<footer className=''>
				<div className='footer'>
					<span className='footer__icon'>
						<FaYoutube className='icon__color' />
						<FaFacebook className='icon__color' />
						<FaTwitter className='icon__color' />
						<FaInstagram className='icon__color' />
					</span>
					<span>
						{' '}
						<p>BreadMen 2020</p>
					</span>
				</div>
			</footer>
		);
}

export default Footer