import { useEffect, useState, RefObject, useCallback } from "react";

interface SortedSkill {
  order: number;
  id: number;
  name: string;
  path: string;
  category: string[];
}
export function useMeasureHeight<T extends HTMLElement>(
  ref: RefObject<T | null>,
  dependencies: SortedSkill[][]
) {
  const [minHeight, setMinHeight] = useState(0);

  const measureHeight = useCallback(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setMinHeight(height);
    }
  }, [ref]);

  useEffect(() => {
    const measureHeight = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        setMinHeight(height);
      }
    };

    measureHeight();

    window.addEventListener("resize", measureHeight);

    return () => window.removeEventListener("resize", measureHeight);
  }, [measureHeight, ref, ...dependencies]);

  return minHeight;
}
