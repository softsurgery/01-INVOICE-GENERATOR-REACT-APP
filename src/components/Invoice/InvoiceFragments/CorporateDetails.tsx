import { cn } from "../../../utils/tailwind";
import { DynamicInput } from "../../Common/ui/DynamicInput";

interface CorporateDetailsProps {
  className?: string;
}

export const CorporateDetails = ({ className }: CorporateDetailsProps) => {
  return (
    <div className={cn(className)}>
      <DynamicInput
        type="DATE"
        label="Date:"
        labelClassName="text-white my-4"
        inputClassName="sm:text-sm rounded-lg block w-full p-2.5"
      />

      <DynamicInput
        type="DATE"
        label="Due Date:"
        labelClassName="text-white my-4"
        inputClassName="sm:text-sm rounded-lg block w-full p-2.5"
      />

      <DynamicInput
        type="TEXT"
        label="Payment Terms:"
        labelClassName="text-white my-4"
        inputClassName="sm:text-sm rounded-lg block w-full p-2.5"
      />

      <DynamicInput
        type="TEXT"
        label="PO Number:"
        labelClassName="text-white my-4"
        inputClassName="sm:text-sm rounded-lg block w-full p-2.5"
      />
    </div>
  );
};
