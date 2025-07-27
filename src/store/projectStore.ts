import { create } from "zustand";
import { Project } from "@/types";

interface ProjectStore {
  project: Project | null;
  setProject: (project: Project) => void;
  clearProject: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  setProject: (project) => set({ project }),
  clearProject: () => set({ project: null }),
}));
