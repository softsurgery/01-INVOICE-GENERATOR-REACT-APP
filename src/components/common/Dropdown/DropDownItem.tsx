import { cn } from "../../../utils/tailwind";

interface DropdownItemProps {
  className?: string;
  title?: string;
  callBack?: () => void;
}

export const DropdownItem = ({ className, title, callBack }: DropdownItemProps) => {
  return (
    <a
      href="javascript:void(0)"
      className={cn(className, "block px-4 py-2 text-sm hover:bg-gray-700")}
      role="button"
      id="user-menu-item-0"
      onClick={callBack}
    >
      {title}
    </a>
  );
};
