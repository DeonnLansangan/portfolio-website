"use client";
import Head from "@/components/ui/head";
import { projectList } from "@/data/projectList";
import ProjectCard from "@/components/cards/projectCard";
import { useMemberStore } from "@/store/memberStore";

export default function MemberProjects() {
  const member = useMemberStore((state) => state.member);
  if (!member) return null;
  return (
    <section
      id="projects"
      className="flex flex-col items-center bg-gray-200 pt-8 pb-20"
    >
      <Head>Projects</Head>
      <div
        className={`p-4 flex flex-col md:flex-row items-center justify-center gap-16`}
      >
        {projectList.map(
          (project) =>
            project.createdBy.includes(member.id) && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </div>
    </section>
  );
}
