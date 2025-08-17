import { ReactNode } from "react";
import FadeIn from "./fadeIn";

export default function Head({ children }: { children: string | ReactNode }) {
  return (
    <FadeIn>
      <h2 className={`text-3xl/14 mb-4 font-bold text-center`}>{children}</h2>
    </FadeIn>
  );
}
