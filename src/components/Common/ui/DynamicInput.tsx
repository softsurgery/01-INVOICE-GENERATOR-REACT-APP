import { cn } from "../../../utils/tailwind";
import { Label } from "./Label";

interface DynamicInputProps {
  className?: string;
  label?: string;
  type?: "TEXT" | "BOOL" | "DATE";
  labelClassName?: string;
  inputClassName?: string;
  callback?: (value: string | boolean) => void;
  errorCallback?: (value: string) => string;
}

export const DynamicInput = ({
  className,
  label,
  type,
  labelClassName,
  inputClassName,
  callback,
  errorCallback,
}: DynamicInputProps) => {
  let inputComponent;
  switch (type) {
    case "TEXT":
      inputComponent = (
        <input
          type="text"
          className={cn(inputClassName)}
          placeholder={label}
          onChange={(e) => {
            callback?.(e.target.value);
          }}
        />
      );
      break;
    case "BOOL":
      inputComponent = (
        <input
          type="checkbox"
          className={cn(inputClassName)}
          placeholder={label}
          onChange={(e) => {
            callback?.(e.target.checked);
          }}
        />
      );
      break;
    case "DATE":
      inputComponent = (
        <input
          type="date"
          className={cn(inputClassName)}
          placeholder={label}
          onChange={(e) => {
            callback?.(e.target.value);
          }}
        />
      );
      break;
  }
  return (
    <div className={cn(className)}>
      <Label className={labelClassName}>{label}</Label>
      {inputComponent}
    </div>
  );
};
