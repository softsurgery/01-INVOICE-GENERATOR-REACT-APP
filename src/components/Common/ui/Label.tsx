import React from "react";
import { cn } from "../../../utils/tailwind";

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  className?: string;
}

export const Label = ({ children, className }: LabelProps) => {
  return (
    <label className={cn(className, "block mb-2 text-white")}>
      {children}
    </label>
  );
};
