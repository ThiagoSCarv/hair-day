import type React from "react";
import Text from "./text";
import ButtonIcon from "./buttonIcon";

interface ListItemProps extends React.ComponentProps<"li"> {
	hour: string;
	name: string;
	className?: string;
}

export function ListItem({ hour, name, className, ...props }: ListItemProps) {
	return (
		<li className="flex items-center w-full max-w-164" {...props}>
			<div className="flex justify-center items-center gap-5">
				<Text variant="title-md" className="text-gray-200">
					{hour}
				</Text>
				<Text variant="regular-text-md" className="text-gray-200">
					{name}
				</Text>
			</div>
			<ButtonIcon className="ml-auto" />
		</li>
	);
}
