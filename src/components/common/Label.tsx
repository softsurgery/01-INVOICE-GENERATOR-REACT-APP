import { cn } from "../../utils/tailwind";

interface LabelProps {
    className?: string;
    value?: string | number | null;
}

export const Label = ({ className, value = "" }: LabelProps) => {
    return (
        <label className={cn(className, "block mb-2 dark:text-white")}>{value}</label>
    );
}