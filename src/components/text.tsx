import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("font-sans text-gray-300", {
	variants: {
		variant: {
			"title-lg": "text-3xl leading-6 font-bold",
			"title-md": "text-base leading-6 font-bold",
			"title-sm": "text-sm leading-5 font-bold",
			"regular-text-md": "text-base leading-6 font-medium",
			"regular-text-sm": "text-sm leading-5 font-medium",
		},
	},
	defaultVariants: {
		variant: "regular-text-md",
	},
});

interface TextProps extends VariantProps<typeof textVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
	children?: React.ReactNode;
}

export default function Text({
	as = "span",
	children,
	variant,
	className,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariants({ variant, className }),
			...props,
		},
		children,
	);
}
