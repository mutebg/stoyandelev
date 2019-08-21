import { h } from 'preact';
import './style.scss';

const other = ['bold', 'italic', 'center', 'upper', 'light', 'block'];

const addClass = (className = '', options, props) => {
	options.forEach(option => {
		if (props[option]) {
			className += ' text-' + option;
		}
	});
	return className;
};

const removeUnusedProps = props => {
	const newProps = {};
	const classess = [].concat(other);
	Object.keys(props).forEach(key => {
		if (classess.indexOf(key) === -1) {
			newProps[key] = props[key];
		}
	});

	return newProps;
};

const Text = ({
	element = 'p',
	children,
	className = '',
	size,
	color,
	lh,
	...rest
}) => {
	const baseClass =
		className +
		' text-base ' +
		(size ? `text-${size} ` : '') +
		(color ? `text-${color} ` : '');

	const newClassName = [other].reduce(
		(prev, current) => addClass(prev, current, rest),
		baseClass
	);

	const newProps = removeUnusedProps(rest);

	const Tag = element;
	return (
		<Tag {...newProps} className={newClassName}>
			{children}
		</Tag>
	);
};

export const Title = props => (
	<Text element="h2" light size="title" {...props} />
);
Text.Title = Title;

export default Text;
