import { ReactNode } from "react";
export default function ProjectContainer({
  id,
  padding = "normal",
  children,
}: {
  id?: string;
  padding?: "normal" | "large";
  children: ReactNode;
}) {
  const paddingClasses = {
    normal: "py-20",
    large: "py-36",
  };
  return (
    <section
      id={id}
      className={`flex flex-col items-center text-center ${paddingClasses[padding]} px-2`}
    >
      {children}
    </section>
  );
}
