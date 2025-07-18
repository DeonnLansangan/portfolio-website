import ProjectCard from "../cards/projectCard";
import Head from "../ui/head";
import { projectList } from "@/data/projectList";

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
