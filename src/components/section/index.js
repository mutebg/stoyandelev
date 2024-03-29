import { h } from 'preact';
import * as kebab from 'just-kebab-case';
import Text from '../text';

const Section = ({
	title,
	children,
	className = 'mt-8',
	titleClassName = 'mb-4',
	titleLevel = 'h2',
	id
}) => {
	const elementID = id ? id : kebab(title) + '-heading';
	return (
		<section class={className} aria-labelledby={id}>
			<div class="container">
				{title && (
					<Text.Title
						className={titleClassName}
						id={elementID}
						element={titleLevel}
						color="gray"
						bold
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
