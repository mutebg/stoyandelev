import { h } from 'preact';
import * as kebab from 'just-kebab-case';

const Section = ({
	title,
	children,
	className,
	titleClassName = 'sub-title',
	titleLevel = 'h2',
	id
}) => {
	const elementID = id ? id : kebab(title) + '-heading';
	const Tag = titleLevel;
	return (
		<section class={className} aria-labelledby={id}>
			<div class="container">
				{title && (
					<Tag class={titleClassName} id={elementID}>
						{title}
					</Tag>
				)}
				{children}
			</div>
		</section>
	);
};

export default Section;
