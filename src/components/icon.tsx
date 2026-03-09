/*import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    size: {
      "size-md": "w-8 h-8",
      "size-sm": "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "size-md",
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
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ size, className })} {...props} />
  );
}*/
