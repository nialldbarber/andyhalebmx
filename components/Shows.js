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
	bottom: 10%;
	left: 10%;
	margin: -150px 0 0 50px;
	&:before {
		display: block;
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		transform-origin: center center;
		transform: translate(-50%, -50%) rotate(220deg);
		background: ${(props) => props.theme.black};
		left: 50%;
		top: 50%;
		transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
		transition-delay: 0.4s;
		opacity: 1;
	}
`;

const Underline = styled.span`box-shadow: ${(props) => props.theme.bsi};`;

const Shows = () => {
	return (
		<section>
			<Content>
				<p>
					My shows can add a great <Underline>showpiece</Underline> to your event. Kids love a BMX show
					whether it is at their school, in term time or as part of a <Underline>local festival</Underline>.
					They can be tailored for your <Underline>specific needs</Underline> such as including workshops, or
					bringing along an extra rider for <Underline>synchronised spinning tricks!</Underline>
				</p>
			</Content>
			<Line />
		</section>
	);
};

export default Shows;
