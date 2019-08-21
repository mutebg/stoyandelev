import { h } from 'preact';
import './style.scss';

const Button = ({
	children,
	size = 'normal',
	type = 'primary',
	className,
	...rest
}) => {
	const Tag = rest.href ? 'a' : 'button';

	return (
		<Tag className={`btn btn--${type} btn--${size} ${className}`} {...rest}>
			{children}
		</Tag>
	);
};

export default Button;
