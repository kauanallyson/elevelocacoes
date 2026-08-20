import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from "react";

const VARIANTS = {
	primary:
		"inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-colors bg-accent text-graphite-900 hover:bg-accent-dark",
	secondary:
		"inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-colors border border-graphite-300 text-graphite-900 hover:border-accent hover:text-accent-dark",
	"secondary-dark":
		"inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-colors border border-graphite-700 text-white hover:border-accent hover:text-accent",
	"link-light":
		"underline decoration-graphite-700 underline-offset-4 transition-colors hover:text-accent text-graphite-100",
	"link-default":
		"underline decoration-graphite-700 underline-offset-4 transition-colors hover:text-accent text-graphite-300",
	"link-subtle":
		"underline decoration-graphite-700 underline-offset-4 transition-colors hover:text-accent text-xs text-graphite-300/70",
	unstyled: "",
};

const SIZES = {
	sm: "px-4 py-2.5",
	md: "px-5 py-2.5",
	lg: "px-6 py-3",
};

// Text-link and unstyled variants own their full look; they don't take padding scale.
const SIZELESS_VARIANTS = new Set<keyof typeof VARIANTS>([
	"link-light",
	"link-default",
	"link-subtle",
	"unstyled",
]);

type CommonProps = {
	variant?: keyof typeof VARIANTS;
	size?: keyof typeof SIZES;
	className?: string;
	children?: ReactNode;
};

export type ButtonProps =
	| (CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
	| (CommonProps & {
			href?: undefined;
	  } & ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button({
	href,
	variant = "primary",
	size = "md",
	className,
	children,
	...rest
}: ButtonProps) {
	const classes = [
		VARIANTS[variant],
		SIZELESS_VARIANTS.has(variant) ? null : SIZES[size],
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
