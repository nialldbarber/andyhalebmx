import styled from 'styled-components';

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

const Line = styled.div`
	width: 200px;
	height: 200px;
	position: absolute;
	top: 30%;
	right: 12%;
	margin: -150px 0 0 50px;
	&:before {
		display: block;
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		transform-origin: center center;
		transform: translate(-50%, -50%) rotate(45deg);
		background: ${(props) => props.theme.black};
		left: 50%;
		top: 50%;
		transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
		transition-delay: 0.4s;
		opacity: 1;
	}
`;

const Underline = styled.span`box-shadow: ${(props) => props.theme.bsi};`;

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
			<Line />
		</section>
	);
};

export default Bio;
