import type React from "react";
import Icon from "./icon";
import TrashIcon from "../assets/Trash.svg?react";

interface ButtonIconProps extends React.ComponentProps<"button"> {
	className?: string;
}

export default function ButtonIcon({ className, ...props }: ButtonIconProps) {
	return (
		<div className="flex cursor-pointer items-center justify-center relative group max-w-8">
			<button
				{...props}
				className="absolute cursor-pointer w-full h-full"
			></button>
			<Icon
				iconSvg={TrashIcon}
				className="group-hover:fill-yellow-dark fill-yellow"
				size="size-md"
			/>
		</div>
	);
}
