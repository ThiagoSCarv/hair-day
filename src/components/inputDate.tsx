import React from "react";
import Icon from "./icon";
import Calendar from "../assets/CalendarBlank.svg?react";
import CaretDown from "../assets/CaretDown.svg?react";

interface InputDateProps extends React.ComponentProps<"input"> {
  children?: string;
}

export default function InputDate({
  children,
  className,
  ...props
}: InputDateProps) {
  return (
    <div className="h-12 relative rounded-lg flex items-center">
      <Icon className="ml-2.5 fill-yellow" size="size-sm" iconSvg={Calendar} />
      <input
        type="date"
        className="absolute z-10 w-full h-full rounded-lg border border-gray-500 outline-none focus:border-yellow-dark pl-9 text-base leading-6 font-medium text-gray-200"
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
