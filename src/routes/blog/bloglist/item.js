import { h } from 'preact';
import './item.scss';
import Text from '../../../components/text';

const Blog = ({ title, link, id, short }) => (
	<li key={id} class="BlogItem">
		<Text bold element="h3" class="BlogItem__title">
			<a id={id} href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</Text>
		<Text class="BlogItem__short">
			{short}
			<a
				href={link}
				target="_blank"
				aria-labelledby={id}
				rel="noopener noreferrer"
			>
				read more
			</a>
		</Text>
	</li>
);

export default Blog;
