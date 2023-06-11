import ImageRight from '../../assets/imageright.jpg'
import './sectionRight.css'


function SectionRight()
{
    return (
			<div className='container-fluid'>
				<div className='section__right'>
					<div className='section__right-text'>
						<dl className='section__ul-right'>
							<dt className='section__h1-right'>
								You get top-
								<br /> shelf products.
							</dt>
							<li>Fine products line</li>
							<li>Made with premium ingredients</li>
							<li>Mix and match to find your perfect routine</li>
						</dl>
					</div>

					<img className='section__img-right' src={ImageRight} alt='' />
				</div>
			</div>
		);
}

export default SectionRight