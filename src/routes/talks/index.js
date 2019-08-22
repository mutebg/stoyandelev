import { h } from 'preact';
import style from './style.scss';
import Section from '../../components/section';
import Text from '../../components/text';
import Button from '../../components/button';
import talks from '../../data/talks.json';

const Talks = () => (
	<Section title="Talks">
		<ul>
			{talks.map(({ name, link, location }) => (
				<li class="mb-7">
					<Text element="h3" className="mb-3" size="large">
						<a href={link} target="_blank" rel="noopener noreferrer">
							{name}
						</a>
					</Text>
					<Text className="mb-3">{location}</Text>
					{link && (
						<Button
							type="trans"
							size="small"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="mr-3"
						>
							view slides
						</Button>
					)}
				</li>
			))}
		</ul>
	</Section>
);

export default Talks;
