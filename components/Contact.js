import styled from 'styled-components';

const ExtendedSection = styled.section`
	height: auto;
	padding: 2rem;
`;

const Content = styled.div`
	max-width: 750px;
	width: 100%;
	padding: 0 1.5rem;
	text-align: center;
	margin: 15rem auto 20rem;
	p {
		font-size: 2.5rem;
	}
`;

const Grid = styled.div`
	max-width: 90%;
	margin: 5rem auto;
	div {
		width: 30%;
	}
	p {
		font-size: 2.5rem;
		margin: 0;
		&:first-child {
			font-weight: 900;
		}
		&:last-child {
			box-shadow: ${(props) => props.theme.bsi};
			display: inline;
		}
	}
	img {
		width: 70%;
		height: auto;
		align-self: center;
		margin-top: 20rem;
	}
`;

const Underline = styled.span`
	box-shadow: ${(props) => props.theme.bsi};
	text-align: center;
	margin: 3rem auto 0;
`;

const Contact = () => {
	return (
		<ExtendedSection>
			<Content>
				<p>Get in touch if you want to work together on a show!</p>
			</Content>
			<Grid className="grid">
				<div>
					<p className="contact-method">Email</p>
					<p className="contact-method">andyhalebmx@hotmail.com</p>
				</div>
				<img src="../static/shows1.jpg" />
			</Grid>
			<Grid className="grid">
				<div>
					<p className="contact-method">Phone</p>
					<p className="contact-method">(+44)7800 771 260</p>
				</div>
				<img src="../static/shows2.jpg" />
			</Grid>
		</ExtendedSection>
	);
};

export default Contact;
