import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const NavBar = styled.div`
	position: fixed;
	background: #fff;
	height: 60px;
	z-index: 999;
	width: 100%;
	padding-top: 5px;
	box-shadow: ${(props) => props.theme.bs};
`;

const Header = () => {
	return (
		<div>
			<NavBar>
				<Nav />
			</NavBar>
		</div>
	);
};

export default Header;
