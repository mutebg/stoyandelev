import { h } from 'preact';

import Item from './item';

export default ({ items }) => (
	<ul>
		{items.map(({ title, link }) => (
			<Item
				title={title}
				link={link}
				short="I’ve been using GitLab and Firebase separately as tools for around 4 years and after I struggling with integrating deployment into my development process, finally around 1 year ago."
				id="TBA"
			/>
		))}
	</ul>
);
