import React from "react";
import Icon from "./icon";
import UserSquare from "../assets/UserSquare.svg?react";

interface InputTextProps extends React.ComponentProps<"input"> {
	className?: string;
}

export default function InputText({ className, ...props }: InputTextProps) {
	return (
		<div className="h-12 relative max-w-85 rounded-lg flex items-center">
			<Icon className="ml-3 fill-yellow" size="size-md" iconSvg={UserSquare} />
			<input
				type="text"
				className="absolute z-10 w-full h-full rounded-lg border border-gray-500 outline-none focus:border-yellow-dark pl-13 text-base leading-6 font-medium text-gray-200"
				{...props}
			/>
		</div>
	);
}
