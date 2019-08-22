import { h } from 'preact';
import style from './style.scss';
import Section from '../../components/section';
import Text from '../../components/text';
import Button from '../../components/button';
import useCases from '../../data/casestudies.json';
import sideProjects from '../../data/sideprojects.json';
import clients from '../../data/clients.json';
import recomendations from '../../data/recomendations.json';

const yearsExpiriance = () => new Date().getFullYear() - 2007;

const Work = () => (
	<div>
		<Section title="What I do">
			<p>
				I build for the web for more than {yearsExpiriance()} years, and I love
				doing it and truly believe that the Web is the most amazing platform
				ever created.
			</p>

			<p>
				Nowadays my focus is on performance and accessibility, using them to
				improve and bring the best user experience to everyone.
			</p>

			<p>
				My current stack is mainly based on React and its ecosystem, but I also
				have experience with Angular, Elm and other frameworks.
			</p>
		</Section>

		{/* <Section title="My vision">
			<p>My vision for the web</p>
		</Section> */}

		{/* <Section title="Use cases">
			<ul>
				{useCases.map(({ name, link }) => (
					<li>
						<h3>
							<a href={link}>{name}</a>
						</h3>
					</li>
				))}
			</ul>
		</Section> */}

		<Section title="Side projects">
			<ul>
				{sideProjects.map(({ name, description, code_url, url }) => (
					<li class="mb-7">
						<Text element="h3" className="mb-3" size="large">
							<a
								href={url || code_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{name}
							</a>
						</Text>
						<Text className="mb-3">{description}</Text>
						{code_url && (
							<Button
								type="trans"
								size="small"
								href={code_url}
								target="_blank"
								rel="noopener noreferrer"
								className="mr-3"
							>
								view code
							</Button>
						)}
						{url && (
							<Button
								size="small"
								href={url}
								target="_blank"
								rel="noopener noreferrer"
							>
								view project
							</Button>
						)}
					</li>
				))}
			</ul>
		</Section>

		{/* <Section title="Profesional projects">
			<ul />
		</Section> */}

		<Section title="Clients">
			<ul class="clients">
				{clients.map(({ name, logo, url }) => (
					<li>
						{logo && (
							<picture>
								<source
									type="image/webp"
									srcset={`/assets/clients/${logo}.jpg`}
								/>
								<img
									loading="lazy"
									src={`/assets/clients/${logo}.jpg`}
									alt={`Logo of ${name}`}
								/>
							</picture>
						)}
						{name}
					</li>
				))}
			</ul>
		</Section>

		<Section title="Testimonials">
			<ul>
				{recomendations.map(({ name, title, text }) => (
					<li>
						<h3>
							{name}
							<span>{title}</span>
						</h3>
						<p>{text}</p>
					</li>
				))}
			</ul>
		</Section>
	</div>
);

export default Work;
