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
    features: [
      {
        icon: "WrenchScrewdriverIcon",
        title: "Reliable & Easy Setup",
        description:
          "With its simple and user-friendly interface, you can easily install CyberSafe to make your X feed more positive.",
      },
      {
        icon: "FunnelIcon",
        title: "Advanced Filtering",
        description:
          "CyberSafe provides extensive filtering using an SVM-LSTM model, allowing you to block potential cyberbullying content for a more positive experience.",
      },
      {
        icon: "ShieldCheckIcon",
        title: "Privacy Protection",
        description:
          "CyberSafe not only filters harmful content but also protects your privacy by anonymizing sensitive user information in the process.",
      },
      {
        icon: "PresentationChartLineIcon",
        title: "Real-Time Monitoring",
        description:
          "CyberSafe continuously monitors your X feed in real-time, filtering out harmful posts and ensuring a safer experience as new content loads.",
      },
    ],
    demoVid: "/videos/demoVid.mp4",
    isDisabled: true,
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
    features: [
      {
        icon: "CircleStackIcon",
        title: "Streamlined Database Management",
        description:
          "Our Information System streamlines database management for the Institutional Database Management Office. It enables administrators to manage employee data efficiently while allowing employees to submit their information in an organized manner.",
      },
      {
        icon: "DocumentTextIcon",
        title: "Advanced Features",
        description:
          "Built on the robust Laravel framework, the system includes an onboard PRC Results scanner that automatically parses board exam results and supports management of employee research and publications.",
      },
    ],
    images: ["/images/hau-website.png", "/images/prc-results.png"],
    color: "maroon",
    priority: false,
    createdBy: [1, 3, 4],
  },
];
