import styled from 'styled-components';

const Line = styled.div`
	width: 200px;
	height: 200px;
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

export default Line;
