import styled from 'styled-components';

const FooterWrap = styled.div`
	background: ${(props) => props.theme.offWhite};
	padding: 2rem;
	text-align: center;
	font-weight: 900;
	p {
		padding: 0;
		margin: 0;
	}
`;

const Footer = () => {
	return (
		<FooterWrap>
			<p>© 2018 Andrew Hale</p>
		</FooterWrap>
	);
};

export default Footer;
