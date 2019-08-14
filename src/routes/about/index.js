import { h } from 'preact';
import style from './style';

import Section from '../../components/section';

const About = () => (
	<Section title="About me">
		<p>Hi, my name is Stoyan Delev, and I'm from Burgas, Bulgaria.</p>

		<p>
			Currently, I’m working as a web developer, but I have always wanted to be
			an astronaut, a climber, a footballer, an architect and so many other
			things, but above all, I’ve always wanted to create and explore, and
			that's what I like most in my job.
		</p>

		<p>
			I’m keen on indie rock and when it’s possible I prefer it live. I’m in
			love with watching and playing football and every week I support my local
			team as a true fan
		</p>

		<p>
			<a href="#">TODO Download CV</a>
		</p>
	</Section>
);

export default About;
