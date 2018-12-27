import Video from '../components/Video';
import Bio from '../components/Bio';
import Gallery from '../components/Gallery';
import Shows from '../components/Shows';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
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
};

export default Index;
