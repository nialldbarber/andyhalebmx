import Video from '../components/Video';
import Bio from '../components/Bio';
import Gallery from '../components/Gallery';
import Shows from '../components/Shows';
import Contact from '../components/Contact';

const Index = () => {
	return (
		<React.Fragment>
			<Video />
			<Bio />
			<Gallery />
			<Shows />
			<Contact />
		</React.Fragment>
	);
};

export default Index;
