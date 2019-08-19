import { h } from 'preact';
import Hero from '../../components/hero';
import BlogList from '../../components/bloglist';
import Section from '../../components/section';
import blogData from '../../data/blog.json';

const Home = () => (
	<div>
		<Hero />
		<Section id="blog" title="Latest articles">
			<BlogList items={blogData.items.slice(5)} />
			<p>
				<a href="/blog">All blog posts</a>
			</p>
		</Section>
		<Section title="More on this site">
			<a href="#">Use cases</a>
			<a href="#">Porjects</a>
			<a href="#">Speaking</a>
		</Section>
	</div>
);

export default Home;
