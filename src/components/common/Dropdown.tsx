import { useEffect, useRef, useCallback } from "react";
import { useResize } from "../../hooks/useResize";
import { cn } from "../../utils/tailwind";

interface DropdownProps {
  className?: string;
  items?: string[];
  active?: boolean;
  callBack: () => void;
}

export const Dropdown = ({
  className,
  items,
  active,
  callBack,
}: DropdownProps) => {
  useResize(callBack);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      callBack();
    }
  }, [callBack]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div
      className={cn(
        className,
        active ? "block" : "hidden",
        "absolute top-16 z-10 w-48 rounded-md bg-gray-800 border-white-900 border-2 text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      )}
      ref={menuRef}
    >
      <a
        href="javascript:void(0)"
        className="block px-4 py-2 text-sm hover:bg-gray-700"
        role="button"
        id="user-menu-item-0"
      >
        Your Profile
      </a>
      <a
        href="javascript:void(0)"
        className="block px-4 py-2 text-sm hover:bg-gray-700"
        role="button"
        id="user-menu-item-1"
      >
        Settings
      </a>
      <a
        href="javascript:void(0)"
        className="block px-4 py-2 text-sm hover:bg-gray-700"
        role="button"
        id="user-menu-item-2"
      >
        Sign out
      </a>
    </div>
  );
};
