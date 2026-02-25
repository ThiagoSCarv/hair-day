import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./icon";
import UserSquare from "../assets/UserSquare.svg?react";
import Calendar from "../assets/CalendarBlank.svg?react";
import CaretDown from "../assets/CaretDown.svg?react";

const inputWrapperVariants = cva("h-12 relative rounded-lg flex items-center", {
	variants: {
		variant: {
			primary: "",
			secondary: "",
		},
		model: {
			md: "w-84",
			sm: "w-40",
		},
	},
	defaultVariants: {
		variant: "primary",
		model: "md",
	},
});

const inputVariants = cva(
	"absolute z-10 w-full h-full rounded-lg border border-gray-500 outline-none focus:border-yellow-dark pl-9 text-base leading-6 font-medium text-gray-200",
	{
		variants: {
			margin: {
				primary: "pl-13",
				secondary: "pl-9",
			},
		},
		defaultVariants: {
			margin: "primary",
		},
	},
);

interface InputProps extends React.ComponentProps<"input"> {
	variant?: string;
	children?: string;
	model?: string;
	margin?: string;
}

export default function Input({
	children,
	className,
	variant,
	margin,
	model,
	...props
}: InputProps) {
	if (variant === "secondary") {
		return (
			<div
				className={inputWrapperVariants({
					variant: "secondary",
					model,
					className,
				})}
			>
				<Icon
					className="ml-2.5 fill-yellow"
					size="size-sm"
					iconSvg={Calendar}
				/>
				<input
					className={inputVariants({ margin: "secondary", className })}
					{...props}
				/>
				<Icon
					className="absolute right-1 z-0 fill-gray-300"
					size="size-sm"
					iconSvg={CaretDown}
				/>
			</div>
		);
	}
	return (
		<div
			className={inputWrapperVariants({
				variant: "primary",
				model,
				className,
			})}
		>
			<Icon className="ml-3 fill-yellow" size="size-md" iconSvg={UserSquare} />
			<input
				className={inputVariants({ margin: "primary", className })}
				{...props}
			/>
		</div>
	);
}
