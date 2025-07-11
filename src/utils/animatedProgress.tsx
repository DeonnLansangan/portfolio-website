import { useEffect, useState } from "react";
import { Progress } from "@mantine/core";

export function AnimatedProgress({
  transitionDuration = 300,
}: {
  transitionDuration?: number;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setValue(100), 10);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Progress size="xs" value={value} transitionDuration={transitionDuration} />
  );
}
