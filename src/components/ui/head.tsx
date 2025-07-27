import { ReactNode } from "react";

export default function Head({ children }: { children: string | ReactNode }) {
  return (
    <h2 className={`text-3xl/14 mb-4 font-bold text-center`}>{children}</h2>
  );
}
