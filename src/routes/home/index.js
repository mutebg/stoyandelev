import { h } from 'preact';
import Hero from '../../components/hero';
import BlogList from '../../components/bloglist';
import Button from '../../components/button';
import Text from '../../components/text';
import Section from '../../components/section';
import blogData from '../../data/blog.json';

import './style.scss';

const Home = () => (
	<div>
		<Hero />
		<Section id="blog" title="Latest articles">
			<BlogList items={blogData.items.slice(5)} />
			<p>
				<Button href="/blog">read all articles</Button>
			</p>
		</Section>
		<Section title="More on this site">
			<div className="more-on-this">
				<a href="/work" class="more-on-this__item">
					<Text element="span" block size="large" class="more-on-this__title">
						Use cases
					</Text>
					<Text element="span" block class="more-on-this__help">
						TODO
					</Text>
				</a>
				<a href="/work" class="more-on-this__item">
					<Text element="span" block size="large" class="more-on-this__title">
						Porjects
					</Text>
					<Text element="span" block class="more-on-this__help">
						TODO
					</Text>
				</a>
				<a href="/talks" class="more-on-this__item">
					<Text element="span" block size="large" class="more-on-this__title">
						Speaking
					</Text>
					<Text element="span" block class="more-on-this__help">
						Links to talks
					</Text>
				</a>
			</div>
		</Section>
	</div>
);

export default Home;
