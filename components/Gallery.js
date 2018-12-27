import styled from 'styled-components';
import Slider from 'react-slick';

class Gallery extends React.Component {
	render() {
		const settings = {
			dots: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 800,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<section>
				<Slider {...settings}>
					<img src="../static/gallery/slick1.JPG" />
					<img src="../static/gallery/slick2.JPG" />
					<img src="../static/gallery/slick3.JPG" />
					<img src="../static/gallery/slick4.JPG" />
					<img src="../static/gallery/slick5.JPG" />
					<img src="../static/gallery/slick6.JPG" />
				</Slider>
			</section>
		);
	}
}

export default Gallery;
