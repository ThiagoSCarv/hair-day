import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
	variants: {
		size: {
			"size-md": "w-5 h-5",
			"size-sm": "w-4 h-4",
		},
		iconColor: {
			"color-yellow": "fill-yellow",
			"color-yellow-dark": "fill-yellow-dark",
			"color-gray-300": "fill-gray-300",
		},
	},
	defaultVariants: {
		size: "size-md",
		iconColor: "color-yellow",
	},
});

export interface IconProps
	extends React.ComponentProps<"svg">,
		VariantProps<typeof iconVariants> {
	iconSvg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
	iconSvg: SvgComponent,
	size,
	iconColor,
	className,
	...props
}: IconProps) {
	return (
		<SvgComponent
			className={iconVariants({ size, iconColor, className })}
			{...props}
		/>
	);
}
