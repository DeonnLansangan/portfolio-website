"use client";
import { useProjectStore } from "@/store/projectStore";
import ProjectContainer from "./projectContainer";
import Head from "@/components/ui/head";

export default function ProjectDemoVid() {
  const project = useProjectStore((state) => state.project);
  const colorClasses = {
    primary: "text-primary",
    maroon: "text-maroon",
  };
  if (!project) return;

  return (
    <ProjectContainer>
      <Head>
        {project.name}
        <span className={colorClasses[project.color]}> Demo Vid</span>
      </Head>
      <div className="pt-8 px-4 sm:px-12 md:px-16 xl:px-20 py-8 bg-white rounded-xl">
        <video
          width="1080"
          height="810"
          controls
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src={project.demoVid} />
        </video>
        {project.isDisabled && (
          <p className="mt-4 italic">
            <span className="font-semibold text-red-500">Note</span>: This
            project is currently disabled. Please contact the developers should
            you want to try it.
          </p>
        )}
      </div>
    </ProjectContainer>
  );
}
