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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
