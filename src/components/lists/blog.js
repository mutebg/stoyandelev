import { h } from 'preact';
import './blog.scss';

const Blog = ({ title, link, id, short }) => (
	<li key={id} class="BlogItem">
		<h3 class="BlogItem__title">
			<a id={id} href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</h3>
		<p class="BlogItem__short">
			{short}
			<a
				href={link}
				target="_blank"
				aria-labelledby={id}
				rel="noopener noreferrer"
			>
				read more
			</a>
		</p>
	</li>
);

export default Blog;
