import { ReactNode } from "react";

export default function Head({ children }: { children: string | ReactNode }) {
  return (
    <h2 className={`text-4xl/14 px-12 mb-4 font-bold text-center`}>
      {children}
    </h2>
  );
}
