import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

const buttonVariants = cva("rounded-lg border-0 cursor-pointer", {
	variants: {
		variant: {
			primary: "bg-yellow hover:border border-yellow-light ",
		},
		size: {
			md: "p-4 w-77",
		},
		disabled: {
			true: "pointer-events-none bg-yellow-dark",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
		disabled: false,
	},
});

interface ButtonProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	disabled?: boolean;
}

export default function Button({
	variant,
	disabled,
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, disabled, className })}
			{...props}
		>
			<Text variant="title-sm" className="text-gray-800">
				{children}
			</Text>
		</button>
	);
}
