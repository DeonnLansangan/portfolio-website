import Button from "../ui/button";
import type { Project } from "@/types";
import Link from "next/link";
import ProjectLogo from "../ui/projectLogo";

export default function ProjectCard({ project }: { project: Project }) {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    maroon: "text-maroon",
  };

  return (
    <div className="max-w-3xs h-[500px] relative flex flex-col items-center bg-white py-6 rounded-xl hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300">
      <ProjectLogo project={project} />
      <h3 className={`text-2xl ${colorClasses[project.color]} font-bold`}>
        {project.name}
      </h3>
      <p className="text-md px-5 text-gray-700 text-center mb-10">
        {project.cardDescription}
      </p>
      <div className="absolute bottom-15">
        <Link href={`/projects/${project.url}`}>
          <Button color={project.color} hover="tinted">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
