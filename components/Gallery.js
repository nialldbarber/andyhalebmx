import styled from 'styled-components';
import Slider from 'react-slick';

class Gallery extends React.Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				<img src="../static/gallery/slick1.JPG" />
				<img src="../static/gallery/slick2.JPG" />
				<img src="../static/gallery/slick3.JPG" />
				<img src="../static/gallery/slick4.JPG" />
				<img src="../static/gallery/slick5.JPG" />
				<img src="../static/gallery/slick6.JPG" />
			</Slider>
		);
	}
}

export default Gallery;
