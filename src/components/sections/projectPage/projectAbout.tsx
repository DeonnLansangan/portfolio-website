"use client";
import Head from "@/components/ui/head";
import { useProjectStore } from "@/store/projectStore";

export default function ProjectAbout() {
  const project = useProjectStore((state) => state.project);
  const colorClasses = {
    primary: "text-primary",
    maroon: "text-maroon",
  };
  if (!project) return;

  return (
    <Head>
      About <span className={colorClasses[project.color]}>{project.name}</span>
    </Head>
  );
}
