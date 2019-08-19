import { h } from 'preact';
import './item.scss';
import Text from '../text';

const Blog = ({ title, link, id, short }) => (
	<li key={id} class="mb-6">
		<Text bold element="h3" className="mb-3" size="large">
			<a id={id} href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</Text>
		<Text>
			{short}{' '}
			<a
				href={link}
				target="_blank"
				aria-labelledby={id}
				rel="noopener noreferrer"
			>
				Read →
			</a>
		</Text>
	</li>
);

export default Blog;
