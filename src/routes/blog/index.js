import { h } from 'preact';
import './style.scss';
import Section from '../../components/section';
import BlogItem from '../../components/lists/blog';
import blogData from '../../data/blog.json';

const Blog = () => (
	<Section class="blog" id="blog" title="Blog">
		<ul>
			{blogData.items.map(({ title, link }) => (
				<BlogItem title={title} link={link} short="TBA" id="TBA" />
			))}
		</ul>
	</Section>
);

export default Blog;
