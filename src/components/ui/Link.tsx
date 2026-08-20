import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from "react";

const VARIANTS = {
	light: "text-graphite-100",
	default: "text-graphite-300",
	subtle: "text-xs text-graphite-300/70",
};

type CommonProps = {
	variant?: keyof typeof VARIANTS;
	className?: string;
	children?: ReactNode;
};

type Props =
	| (CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
	| (CommonProps & {
			href?: undefined;
	  } & ButtonHTMLAttributes<HTMLButtonElement>);

export default function Link({
	href,
	variant = "light",
	className,
	children,
	...rest
}: Props) {
	const classes = [
		"underline decoration-graphite-700 underline-offset-4 transition-colors hover:text-accent",
		VARIANTS[variant],
		className,
	]
		.filter(Boolean)
		.join(" ");

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				{...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type="button"
			className={classes}
			{...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	);
}
