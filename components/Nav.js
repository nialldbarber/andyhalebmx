import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';

const NavContainer = styled.div`
	position: absolute;
	.nav {
		width: 100vw;
		display: flex;
		justify-content: space-evenly;
		a {
			padding: .6rem 0;
		}
	}
`;

const HeaderLogo = styled.img`
	width: 120px;
	height: auto;
	align-self: center;
	margin-top: -12px;
`;

export default class Nav extends Component {
	render() {
		return (
			<NavContainer>
				<div className="nav">
					<Link activeClassName="active" href="/">
						<a>Home</a>
					</Link>
					<Link activeClassName="active" href="/about">
						<a>About</a>
					</Link>
					<Link activeClassName="active" href="/">
						<HeaderLogo src="../static/main-logo8.png" />
					</Link>
					<Link activeClassName="active" href="/gallery">
						<a>Gallery</a>
					</Link>
					<Link activeClassName="active" href="/contact">
						<a>Contact</a>
					</Link>
				</div>
			</NavContainer>
		);
	}
}
