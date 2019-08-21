import { h } from 'preact';
import './style.scss';
import me from '../../assets/me.png';

const Hero = () => (
	<div class="hero">
		<div class="container">
			<p class="hero__sub">Hello world, my name is Stoyan</p>
			<h1 class="hero__title">I make web</h1>
			<p class="hero__sub">
				I am front-end developer focused on web performance.
			</p>
		</div>
	</div>
);

export default Hero;
