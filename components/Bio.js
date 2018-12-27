import styled from 'styled-components';
import Parallax from 'react-rellax';
import Line from './styles/Line';
import Underline from './styles/Underline';

const Content = styled.div`
	max-width: 750px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	padding: 0 1.5rem;
	p {
		font-size: 2.2rem;
	}
`;

const LineWrap = styled.div`
	position: absolute;
	top: 35rem;
	right: 12%;
`;

const Bio = () => {
	return (
		<section>
			<Content>
				<p>
					My name is <Underline>Andy Hale</Underline> and I am a professional{' '}
					<Underline>BMX flatland rider</Underline>. I compete around the UK and also perform at a variety of
					different types of events. From <Underline>cruise ships</Underline> to{' '}
					<Underline>schools</Underline>, <Underline>films</Underline> to <Underline>trade events</Underline>,
					I have years of experience performing in shows. Whether you would like my skills as part of a stage
					show, or a school workshop teaching young students some basic BMX techniques,{' '}
					<Underline>I can do it for you!</Underline>
				</p>
			</Content>
			<LineWrap>
				<Parallax speed={1.3}>
					<Line />
				</Parallax>
			</LineWrap>
		</section>
	);
};

export default Bio;
