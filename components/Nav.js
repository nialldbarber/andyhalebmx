import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';

const NavContainer = styled.div`position: absolute;`;

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
					<Link activeClassName="active" href="/projects">
						<a>Projects</a>
					</Link>
					<Link activeClassName="active" href="/contact">
						<a>Contact</a>
					</Link>
				</div>
			</NavContainer>
		);
	}
}
