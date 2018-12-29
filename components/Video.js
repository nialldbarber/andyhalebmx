import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const VideoPlayer = styled.video`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	min-width: 100%;
	min-height: calc(100vh - 13rem);
	width: auto;
	height: auto;
	z-index: -1000;
	overflow: hidden;
`;

const VideoSection = styled.section`
	position: relative;
	overflow: hidden;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
		z-index: -1;
	}
`;

const DownArrow = styled.img`
	width: 50px;
	height: 50px;
	position: absolute;
	left: 50%;
	bottom: 3rem;
	transform: translateX(-50%);
`;

const Video = () => {
	return (
		<VideoSection id="home">
			<VideoPlayer autoPlay muted loop>
				<source src="../static/cover-video2.mp4" type="video/mp4" />
			</VideoPlayer>
			<AnchorLink href="#about">
				<DownArrow src="../static/down-arrow.svg" alt="More Options" />
			</AnchorLink>
		</VideoSection>
	);
};

export default Video;
