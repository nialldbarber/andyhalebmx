import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavContainer = styled.div`
	position: absolute;
	.nav {
		width: 100vw;
		display: flex;
		justify-content: space-evenly;
		a {
			padding: 0.6rem 0;
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
					<AnchorLink href="#home">Home</AnchorLink>
					<AnchorLink href="#about">About</AnchorLink>
					<AnchorLink href="#home">
						<HeaderLogo src="../static/main-logo8.png" />
					</AnchorLink>
					<AnchorLink href="#gallery">Gallery</AnchorLink>
					<AnchorLink href="#contact">Contact</AnchorLink>
				</div>
			</NavContainer>
		);
	}
}
