import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blog from '../routes/blog';
import Work from '../routes/work';
import About from '../routes/about';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<main class="main">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Blog path="/blog" />
						<Work path="/work" />
						<About path="/about" />
					</Router>
				</main>
				<Footer />
			</div>
		);
	}
}
