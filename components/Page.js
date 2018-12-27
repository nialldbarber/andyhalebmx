import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
	black: '#1e272d',
	offWhite: '#fff',
	green: '#6cc',
	orange: '#f89b0e',
	pink: '#f95584',
	maxWidth: '1100px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
	bsi: 'inset 0 -8px #fefc43, inset 0 -0.2em #fefc43',
	transition: '.25s cubic-bezier(.895, .03, .685, .22)'
};

const StyledPage = styled.div`color: ${(props) => props.theme.black};`;

const Inner = styled.div`
	margin: 0 auto;
	min-height: calc(100vh - 13rem);
`;

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Questrial');
	html {
		box-sizing: border-box;
		font-size: 10px;
		overflow-x: hidden;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		position: relative;
		margin: 0;
		padding: 0;
		font-size: 1.7rem;
		line-height: 2;
		-webkit-font-smoothing: antialiased;
		font-family: 'Questrial', sans-serif;
		background: ${theme.offWhite};
		color: ${theme.black};
		@media (max-width: 509px) {
			padding: 0;
		}
	}
	a {
		text-decoration: none;
		color: ${theme.black};
	}
	section {
		background: ${theme.offWhite};
		height: 100vh;
		min-height: calc(100vh - 13rem);
		width: 100vw;
		overflow: hidden;
		position: relative;
		&:first-child {
			background: transparent;
		}
	}
	.bar {
		@media (max-width: 509px) {
			width: 100vw;
			height: 8.6rem;
			position: fixed;
			top: 0;
			background: ${theme.black};
			z-index: 999;
			box-shadow: ${theme.bs};
		}
	}
	.grid {
		display: flex;
		margin-top: 6rem;
	}
`;

export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}
