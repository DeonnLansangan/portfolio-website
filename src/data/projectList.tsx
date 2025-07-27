import { Project } from "@/types";

export const projectList: Project[] = [
  {
    id: 1,
    name: "CyberSafe",
    url: "cyberSafe",
    logo: "/logos/cybersafeLogo.png",
    title: "Filter your X Feed with CyberSafe",
    cardDescription:
      "An advanced filtering tool to create a safer experience on X.com (formerly Twitter).",
    pageDescription: "Have a safer and more positive experience on X!",
    color: "primary",
    priority: true,
    createdBy: [1, 2, 3, 4],
  },
  {
    id: 2,
    name: "HAU InfoSys",
    altName: "HAU Information System",
    url: "hauInfoSys",
    logo: "/logos/hau-logo.png",
    title: "HAU Information System",
    cardDescription:
      "An information system website that streamlined database management for Holy Angel University.",
    pageDescription:
      "A database management website created for Holy Angel University",
    color: "maroon",
    priority: false,
    createdBy: [1, 3, 4],
  },
];
