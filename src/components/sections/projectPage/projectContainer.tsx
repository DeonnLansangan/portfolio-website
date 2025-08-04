import { ReactNode } from "react";
export default function ProjectContainer({
  padding = "normal",
  children,
}: {
  padding?: "normal" | "large";
  children: ReactNode;
}) {
  const paddingClasses = {
    normal: "py-20",
    large: "py-36",
  };
  return (
    <section
      className={`flex flex-col items-center text-center ${paddingClasses[padding]} px-2`}
    >
      {children}
    </section>
  );
}
