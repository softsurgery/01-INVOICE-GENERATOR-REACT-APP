import { cn } from "../../utils/tailwind";

interface NavItemProps {
  className?: string;
  title?: string;
  path?: string;
  active?: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  className,
  title,
  active,
  onClick,
}: NavItemProps) => {
  return (
    <a
      onClick={() => {
        onClick?.();
      }}
      className={cn(
        className,
        "rounded-md px-2 py-2 text-sm font-medium cursor-pointer",
        active
          ? "bg-gray-900 text-primary"
          : "text-gray-300 hover:bg-gray-700 hover:text-primary"
      )}
    >
      {title}
    </a>
  );
};
