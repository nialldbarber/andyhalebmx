import React, { Component } from 'react';
import Video from '../components/Video';
import Bio from '../components/Bio';
import Gallery from '../components/Gallery';
import Shows from '../components/Shows';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default class Index extends Component {
	render() {
		return (
			<React.Fragment>
				<Video />
				<Bio />
				<Gallery />
				<Shows />
				<Contact />
				<Footer />
			</React.Fragment>
		);
	}
}
