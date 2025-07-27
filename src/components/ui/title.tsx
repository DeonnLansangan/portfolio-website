import { ReactNode } from "react";

export default function Title({ children }: { children: string | ReactNode }) {
  return (
    <h1 className={`text-4xl/14 px-12 mb-4 font-bold text-center`}>
      {children}
    </h1>
  );
}
