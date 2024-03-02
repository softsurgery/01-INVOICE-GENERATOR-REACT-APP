import { cn } from "../../utils/tailwind";

interface NavItemProps {
    className?: string;
    title?: string;
    path?: string;
    active?: boolean;
}

export const NavItem = ({ className, title, path, active }: NavItemProps) => {
    return (
            <a href={path} className={cn(className, "rounded-md px-3 py-2 text-sm font-medium", active ? "bg-gray-900 text-primary" : "text-gray-300 hover:bg-gray-700 hover:text-primary")}>{title}</a>
    )
}