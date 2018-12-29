import Link from 'next/link';
import styled from 'styled-components';

const FooterWrap = styled.div`
	background: ${props => props.theme.offWhite};
	padding: 2rem;
	text-align: center;
	font-weight: 900;
	p {
		padding: 0;
		margin: 0;
	}
`;

const Social = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	padding-bottom: 2rem;
	img {
		width: 45px;
		height: 45px;
	}
`;

const Footer = () => {
	return (
		<FooterWrap>
			<Social>
				<Link href="https://www.strava.com/athletes/629253?hl=en-GB">
					<a target="_blank">
						<img src="../static/strava.svg" alt="Strava" />
					</a>
				</Link>
				<Link href="https://www.instagram.com/andybmxhale/">
					<a target="_blank">
						<img src="../static/instagram.svg" alt="Instagram" />
					</a>
				</Link>
			</Social>
			<p>© {new Date().getFullYear()} Andrew Hale</p>
		</FooterWrap>
	);
};

export default Footer;
