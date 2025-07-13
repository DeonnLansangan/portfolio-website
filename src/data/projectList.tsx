import { Project } from "@/types";

export const projectList: Project[] = [
  {
    id: 1,
    name: "CyberSafe",
    logo: "/logos/cyberSafeLogo.png",
    description:
      "An advanced filtering tool to create a safer experience on X.com (formerly Twitter).",
    color: "primary",
    priority: true,
    createdBy: [1, 2, 3, 4],
  },
  {
    id: 2,
    name: "HAU InfoSys",
    logo: "/logos/hau-logo.png",
    description:
      "An information system website that streamlined database management for Holy Angel University.",
    color: "maroon",
    priority: false,
    createdBy: [1, 3, 4],
  },
];
