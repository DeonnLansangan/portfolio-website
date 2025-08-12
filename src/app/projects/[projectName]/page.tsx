import { projectList } from "@/data/projectList";
import { notFound } from "next/navigation";
import ProjectProvider from "./ProjectProvider";
import ProjectHero from "@/components/sections/projectPage/projectHero";
import Members from "@/components/sections/members";
import ProjectAbout from "@/components/sections/projectPage/projectAbout";
import ProjectDemoVid from "@/components/sections/projectPage/projectVideo";
import ProjectScreenshots from "@/components/sections/projectPage/projectScreenshots";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  const project = projectList.find((project) => projectName === project.url);

  if (!project) notFound();
  return (
    <div className="bg-gray-200">
      <ProjectProvider project={project}>
        <ProjectHero />
        <ProjectAbout />
        {project.images && <ProjectScreenshots />}
        {project.demoVid && <ProjectDemoVid />}
        <div className="px-20 xl:px-40">
          <Members
            header="Created by"
            selectedMembers={project.createdBy}
            color={project.color}
          />
        </div>
      </ProjectProvider>
    </div>
  );
}
