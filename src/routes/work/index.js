import { h } from 'preact';
import style from './style';
import Section from '../../components/section';
import useCases from '../../data/casestudies.json';
import sideProjects from '../../data/sideprojects.json';
import clients from '../../data/clients.json';
import recomendations from '../../data/recomendations.json';

const Work = () => (
	<div class={style.home}>
		<Section title="What I do">
			<p>
				I build for the web for more than ten years, and I love doing it and
				truly believe that the Web is the most amazing platform ever created.
			</p>

			<p>
				Nowadays my focus is on performance and accessibility, using them to
				improve and bring the best user experience to everyone.
			</p>

			<p>
				My current stack includes different technologies such as (p)React,
				Redux, RxJS, Polymer, SCSS, ES2015+, Elm.
			</p>
		</Section>

		<Section title="My vision">
			<p>My vision of the web</p>
		</Section>

		<Section title="Use cases">
			<ul>
				{useCases.map(({ name, link }) => (
					<li>
						<h3>
							<a href={link}>{name}</a>
						</h3>
					</li>
				))}
			</ul>
		</Section>

		<Section title="Side projects">
			<ul>
				{sideProjects.map(({ name, description, code_url, url }) => (
					<li>
						<h3>
							<a href={url || code_url}>{name}</a>
						</h3>
						<p>{description}</p>
						{code_url && <a href={code_url}>View code</a>}
						{url && <a href={url}>View project</a>}
					</li>
				))}
			</ul>
		</Section>

		<Section title="Profesional projects">
			<ul />
		</Section>

		<Section title="Clients">
			<ul>
				{clients.map(({ name, logo, url }) => (
					<li>
						<h3>
							<a href={url}>
								{logo && <img src={logo} alt="" />}
								{name}
							</a>
						</h3>
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
