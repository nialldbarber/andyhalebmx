import Link from 'next/link';
import Router from 'next/router';
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

const Header = () => {
	return (
		<div>
			<div className="bar">
				<div>
					<Link href="/">
						<a />
					</Link>
				</div>
				<Nav />
			</div>
		</div>
	);
};

export default Header;
