export default function Head({ children }: { children: string }) {
  return <h2 className={`text-4xl mb-4 font-bold text-center`}>{children}</h2>;
}
