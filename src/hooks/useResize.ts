import { useEffect } from "react";

export function useResize(callback: () => void) {
  useEffect(() => {
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [callback]);
}
