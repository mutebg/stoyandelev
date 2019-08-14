import { h } from 'preact';
import * as kebab from 'just-kebab-case';
import Text from '../text';

const Section = ({
	title,
	children,
	className,
	titleClassName = '',
	titleLevel = 'h2',
	id
}) => {
	const elementID = id ? id : kebab(title) + '-heading';
	return (
		<section class={className} aria-labelledby={id}>
			<div class="container">
				{title && (
					<Text.Title
						class={titleClassName}
						id={elementID}
						element={titleLevel}
					>
						{title}
					</Text.Title>
				)}
				{children}
			</div>
		</section>
	);
};

export default Section;
