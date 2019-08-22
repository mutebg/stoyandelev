import { h } from 'preact';
import './style.scss';
import Text from '../../components/text';

const Hero = () => (
	<div class="hero">
		<div class="container">
			<div class="hero__welcome">
				<Text class="hero__sub" size="xlarge">
					Hello world, my name is Stoyan
				</Text>
				<Text size="page" bold class="hero__title" element="h1">
					I make web stuff
				</Text>
				<Text size="xlarge" class="hero__sub">
					I am front-end developer focused on web performance.
				</Text>
			</div>
			<img src="https://stoyandelev.com/me.webp" />
		</div>
	</div>
);

export default Hero;
