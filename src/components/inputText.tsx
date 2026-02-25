import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./icon";
import UserSquare from "../assets/UserSquare.svg?react";

const inputWrapperVariants = cva(
	"h-12 relative max-w-85 rounded-lg flex items-center",
	{
		variants: {},
	},
);

const inputTextVariants = cva(
	"absolute z-10 w-full h-full rounded-lg border border-gray-500 outline-none focus:border-yellow-dark pl-13 text-base leading-6 font-medium text-gray-200",
);

interface InputTextProps extends React.ComponentProps<"input"> {
	children?: string;
}

export default function InputText({
	children,
	className,
	...props
}: InputTextProps) {
	return (
		<div
			className={inputWrapperVariants({
				className,
			})}
		>
			<Icon className="ml-3 fill-yellow" size="size-md" iconSvg={UserSquare} />
			<input
				type="text"
				className={inputTextVariants({ className })}
				{...props}
			/>
		</div>
	);
}
