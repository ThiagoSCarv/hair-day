import type React from "react";
import Text from "./text";

interface InputCheckBoxProps extends React.ComponentProps<"input"> {
	className?: string;
	children?: string;
}

export function InputCheckBox({
	children,
	className,
	...props
}: InputCheckBoxProps) {
	return (
		<div
			className="flex justify-center items-center group rounded border border-gray-500 bg-gray-600
      hover:bg-gray-500 checked:border-yellow max-w-20 py-2 relative 
      has-checked:border-yellow has-disabled:border-gray-600 has-disabled:bg-gray-900 "
		>
			<input
				type="checkbox"
				className="absolute opacity-0 w-full h-full cursor-pointer rounded peer disabled:cursor-not-allowed"
				{...props}
			/>
			<Text
				variant="regular-text-md"
				className="text-gray-400 group-hover:text-gray-200 peer-checked:text-yellow peer-disabled:text-gray-500"
			>
				{children}
			</Text>
		</div>
	);
}
