export default function Button({
  children,
  color,
  hover,
  type = "button",
  handleClick,
  ...props
}: {
  children: React.ReactNode;
  color: "primary" | "secondary" | "maroon";
  hover: "inverted" | "tinted";
  type?: "submit" | "button";
  handleClick?: () => Promise<void>;
  [key: string]: any;
}) {
  const hoverClasses = {
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
      className={`${hoverClasses[hover][color]} text-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 px-8 py-3 rounded-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={handleClick}
      type={type}
      disabled={props.disabled}
      {...props}
    >
      <span className="font-bold">{children}</span>
    </button>
  );
}
