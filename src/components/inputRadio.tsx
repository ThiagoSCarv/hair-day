import type React from "react";
import Text from "./text";

interface InputRadioProps extends React.ComponentProps<"input"> {
	className?: string;
	children?: string;
}

export function InputRadio({ children, className, ...props }: InputRadioProps) {
	return (
		<div
			className="flex justify-center items-center group rounded border border-gray-500 bg-gray-600
      hover:bg-gray-500 checked:border-yellow max-w-20 px-5 py-2 relative 
      has-checked:border-yellow has-disabled:border-gray-600 has-disabled:bg-gray-800 "
		>
			<input
				type="radio"
				id={children}
				name="horario"
				value={children}
				className="absolute opacity-0 w-full h-full cursor-pointer rounded peer disabled:cursor-not-allowed"
				{...props}
			/>
			<Text
				as="label"
				htmlFor={children}
				variant="regular-text-md"
				className="text-gray-400 group-hover:text-gray-200 peer-checked:text-yellow peer-disabled:text-gray-500"
			>
				{children}
			</Text>
		</div>
	);
}
