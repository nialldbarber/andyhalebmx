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
		background: rgba(0, 0, 0, .4);
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
`;

const Video = () => {
	return (
		<VideoSection>
			<h1>Andy Hale</h1>
			<h2>BMX</h2>
			<VideoPlayer autoPlay muted loop>
				<source src="../static/cover-video.mp4" type="video/mp4" />
			</VideoPlayer>
		</VideoSection>
	);
};

export default Video;
