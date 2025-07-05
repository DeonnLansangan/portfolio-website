import ProjectCard from "../cards/projectCard";
import Head from "../ui/head";

type Project = {
  id: number;
  name: string;
  logo: string;
  description: string;
  color: "primary" | "secondary" | "maroon";
  priority: boolean;
};

const projectList: Project[] = [
  {
    id: 1,
    name: "CyberSafe",
    logo: "/logos/cyberSafeLogo.png",
    description:
      "An advanced filtering tool to create a safer experience on X.com (formerly Twitter).",
    color: "primary",
    priority: true,
  },
  {
    id: 2,
    name: "HAU InfoSys",
    logo: "/logos/hau-logo.png",
    description:
      "An information system website that streamlined database management for Holy Angel University.",
    color: "maroon",
    priority: false,
  },
];

export default function Projects() {
  return (
    <section className="py-12 bg-gray-300">
      <Head>Our Projects</Head>
      <div
        className={`p-10 flex flex-col md:flex-row items-center justify-center gap-16`}
      >
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            filePath={project.logo}
            description={project.description}
            color={project.color}
            priority={project.priority}
          />
        ))}
      </div>
    </section>
  );
}
