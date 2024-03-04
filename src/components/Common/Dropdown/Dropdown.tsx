import { useEffect, useRef, useCallback } from "react";
import { useResize } from "../../../hooks/useResize";
import { cn } from "../../../utils/tailwind";
import { DropdownItem } from ".";

export interface DropdownItemType {
  title: string;
  callback?: () => void;
}

interface DropdownProps {
  className?: string;
  items?: DropdownItemType[];
  active?: boolean;
  callBack: () => void;
}

export const Dropdown = ({
  className,
  items,
  active,
  callBack,
}: DropdownProps) => {
  //resize event control
  useResize(callBack);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        callBack();
      }
    },
    [callBack]
  );

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
        "absolute top-16 right-0 z-10 w-48 rounded-md bg-gray-800 border-white-900 border-2 text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      )}
      ref={menuRef}
    >
      {items &&
        items.map((item: DropdownItemType, index) => {
          return (
            <DropdownItem
              key={index}
              title={item.title}
              callBack={item.callback}
            />
          );
        })}
    </div>
  );
};
