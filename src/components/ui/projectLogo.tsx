import { Project } from "@/types";
import Image from "next/image";

export default function ProjectLogo({
  project,
  size = "base",
}: {
  project: Project;
  size?: "base" | "lg";
}) {
  const sizeClasses = {
    base: 200,
    lg: 225,
  };
  return (
    <Image
      alt={`${project.name} logo`}
      src={project.logo}
      width={sizeClasses[size]}
      height={sizeClasses[size]}
      priority={project.priority}
      className="object-cover rounded-lg mb-4"
    />
  );
}
