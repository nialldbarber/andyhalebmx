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
`;

const Video = () => {
	return (
		<VideoSection>
			<VideoPlayer autoPlay muted loop>
				<source src="../static/cover-video.mp4" type="video/mp4" />
			</VideoPlayer>
		</VideoSection>
	);
};

export default Video;
