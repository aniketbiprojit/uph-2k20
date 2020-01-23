import React, { Component } from 'react';
import '../styles/Gallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

class Gallery extends Component {
	state = {};
	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			dots: true,
			// fade: true,
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 3,
			speed: 500
		};

		const settings1 = {
			className: 'center',
			// centerMode: true,
			dots: true,
			// fade: true,
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 1,
			speed: 500
		};
		return (
			<div className='Gallery1'>
				<span className='heading headingGallery  link--kukuri'>
					Gallery
				</span>
				<div className='GalleryOuter'>
					<div className='onPC'>
						<Slider {...settings}>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage'
								/>
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage'
								/>{' '}
							</div>
						</Slider>
					</div>

					<div className='onPhone'>
						<Slider {...settings1}>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage onPhoneImage'
								/>
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage onPhoneImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage onPhoneImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage onPhoneImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage onPhoneImage'
								/>{' '}
							</div>
							<div>
								<img
									src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
									alt=''
									className='masonryImage onPhoneImage'
								/>{' '}
							</div>
						</Slider>
					</div>
				</div>
			</div>
		);
	}
}

export default Gallery;
