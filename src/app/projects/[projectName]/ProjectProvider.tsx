"use client";
import { useEffect, ReactNode } from "react";
import { useProjectStore } from "@/store/projectStore";
import { Project } from "@/types";

export default function ProjectProvider({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  const setProject = useProjectStore((state) => state.setProject);

  useEffect(() => {
    setProject(project);
  }, [project, setProject]);

  return <>{children}</>;
}
