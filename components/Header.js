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
	height: 50px;
	z-index: 999;
	width: 100%;
	padding-top: 5px;
`;

const Header = () => {
	return (
		<div>
			<NavBar>
				<div>
					<Link href="/">
						<a />
					</Link>
				</div>
				<Nav />
			</NavBar>
		</div>
	);
};

export default Header;
