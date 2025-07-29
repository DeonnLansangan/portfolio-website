import { useEffect, useState, RefObject, useCallback } from "react";

export function useMeasureHeight<T extends HTMLElement>(
  ref: RefObject<T | null>,
  dependencies: any[] = [] // Add dependencies to trigger re-measurement
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
  }, [measureHeight, ...dependencies]);

  return minHeight;
}
