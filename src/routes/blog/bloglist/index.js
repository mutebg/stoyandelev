import { h } from 'preact';

import Item from './item';

export default ({ items }) => (
	<ul>
		{items.map(({ title, link }) => (
			<Item title={title} link={link} short="..." id="TBA" />
		))}
	</ul>
);
