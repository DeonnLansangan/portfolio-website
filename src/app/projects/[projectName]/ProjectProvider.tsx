"use client";
import { useEffect, ReactNode, useState } from "react";
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setProject(project);
    setIsInitialized(true);
  }, [project, setProject]);

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
}
