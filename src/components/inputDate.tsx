import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./icon";
import Calendar from "../assets/CalendarBlank.svg?react";
import CaretDown from "../assets/CaretDown.svg?react";

const inputWrapperVariants = cva("h-12 relative rounded-lg flex items-center", {
	variants: {
		model: {
			md: "w-85",
			sm: "w-40",
		},
	},
	defaultVariants: {
		model: "md",
	},
});

const inputDateVariants = cva(
	"absolute z-10 w-full h-full rounded-lg border border-gray-500 outline-none focus:border-yellow-dark pl-9 text-base leading-6 font-medium text-gray-200",
);

interface InputDateProps extends React.ComponentProps<"input"> {
	children?: string;
	model?: string;
}

export default function InputDate({
	children,
	className,
	model,
	...props
}: InputDateProps) {
	return (
		<div
			className={inputWrapperVariants({
				model,
				className,
			})}
		>
			<Icon className="ml-2.5 fill-yellow" size="size-sm" iconSvg={Calendar} />
			<input
				type="date"
				className={inputDateVariants({ className })}
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
