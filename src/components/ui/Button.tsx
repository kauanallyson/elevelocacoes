import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const VARIANTS = {
  primary: "bg-accent text-graphite-900 hover:bg-accent-dark",
  secondary:
    "border border-graphite-300 text-graphite-900 hover:border-accent hover:text-accent-dark",
  "secondary-dark":
    "border border-graphite-700 text-white transition-colors hover:border-accent hover:text-accent",
};

const SIZES = {
  sm: "px-4 py-2.5",
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

type CommonProps = {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
  children?: ReactNode;
};

type Props =
  | (CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (CommonProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const classes = [
    "inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-colors",
    VARIANTS[variant],
    SIZES[size],
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
