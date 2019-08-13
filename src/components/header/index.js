import { h } from 'preact';
import { Link } from 'preact-router/match';
import './style.scss';

const Header = () => (
	<header class="header">
		<h1>Stoyan Delev</h1>
		<nav>
			<Link activeClassName={'active'} href="/">
				Home
			</Link>
			<Link activeClassName={'active'} href="/work">
				Work
			</Link>
			<Link activeClassName={'active'} href="/about">
				About me
			</Link>
			<Link activeClassName={'active'} href="/blog">
				Blog
			</Link>
		</nav>
	</header>
);

export default Header;
