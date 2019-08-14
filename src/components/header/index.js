import { h } from 'preact';
import { Link } from 'preact-router/match';
import './style.scss';
import Text from '../text';

const Header = () => (
	<header class="Header">
		<Text color="active" size="large" className="Header__title">
			Stoyan Delev
		</Text>
		<nav>
			<Link activeClassName={'active'} href="/">
				Home
			</Link>
			<Link activeClassName={'active'} href="/work">
				Work
			</Link>
			<Link activeClassName={'active'} href="/blog">
				Articles
			</Link>
			<Link activeClassName={'active'} href="/about">
				About me
			</Link>
		</nav>
	</header>
);

export default Header;
