export default function Button({
  children,
  color,
  type,
}: {
  children: React.ReactNode;
  color: "primary" | "secondary" | "maroon";
  type: "inverted" | "tinted";
}) {
  const typeClasses = {
    inverted: {
      primary: "bg-primary hover:text-primary hover:bg-white",
      secondary: "bg-secondary hover:text-secondary hover:bg-white",
      maroon: "bg-maroon hover:text-maroon hover:bg-white",
    },
    tinted: {
      primary: "bg-primary hover:bg-primary-100",
      secondary: "bg-secondary hover:bg-secondary-100",
      maroon: "bg-maroon hover:bg-maroon-100",
    },
  };

  return (
    <button
      className={`${typeClasses[type][color]} text-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 px-8 py-3 rounded-3xl cursor-pointer`}
    >
      <span className="font-bold">{children}</span>
    </button>
  );
}
