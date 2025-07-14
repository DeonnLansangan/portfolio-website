import Image from "next/image";
import Button from "../ui/button";

export default function ProjectCard({
  name,
  filePath,
  description,
  color,
  priority,
}: {
  name: string;
  filePath: string;
  description: string;
  color: "primary" | "secondary" | "maroon";
  priority: boolean;
}) {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    maroon: "text-maroon",
  };

  return (
    <div className="max-w-3xs h-[500px] relative flex flex-col items-center bg-white py-6 rounded-xl hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300">
      <Image
        alt={`${name} logo`}
        src={filePath}
        width={200}
        height={200}
        priority={priority}
        className="object-cover rounded-lg mb-4"
      />
      <h3 className={`text-2xl ${colorClasses[color]} font-bold`}>{name}</h3>
      <p className="text-md px-5 text-gray-700 text-center mb-10">
        {description}
      </p>
      <div className="absolute bottom-15">
        <Button color={color} hover="tinted">
          Learn More
        </Button>
      </div>
    </div>
  );
}
