import { h } from 'preact';
import './style.scss';
import Section from '../../components/section';
import BlogList from '../../components/bloglist';
import blogData from '../../data/blog.json';

const Blog = () => (
	<Section class="blog" title="Articles">
		<BlogList items={blogData.items} />
	</Section>
);

export default Blog;
