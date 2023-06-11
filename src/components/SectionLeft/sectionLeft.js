import ImageLeft from '../../assets/imageleft.jpg'
import './sectionLeft.css'

function SectionLeft()
{
    return (
			<div className='container-fluid'>
				<div className='section__left'>
					<img className='section__img-left' src={ImageLeft} alt='' />
					<div className='section__left-text'>
						<dl>
							<dt className='section__h1-left'>
								You get top-
								<br /> shelf products.
							</dt>
							<dd className='section__li-left'>Fine products line</dd>
							<dd className='section__li-left'>
								Made with premium ingredients
							</dd>
							<dd className='section__li-left'>Mix and match to find your perfect routine</dd>
						</dl>
						{/* <ul className='section__ul-left'>
							<li className='section__li-left'>Fine products line</li>
							<li className='section__li-left'>
								Made with premium ingredients
							</li>
							<li className='section__li-left'>
								Mix and match to find your perfect routine
							</li>
						</ul> */}
					</div>
				</div>
			</div>
		);
}

export default SectionLeft