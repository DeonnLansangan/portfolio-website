export default function Button({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "primary" | "secondary";
}) {
  return (
    <button
      className={`bg-${color} hover:bg-white text-white hover:text-${color} shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 px-8 py-3 rounded-3xl cursor-pointer`}
    >
      {children}
    </button>
  );
}
