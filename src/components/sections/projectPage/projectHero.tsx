"use client";
import Button from "@/components/ui/button";
import ProjectLogo from "@/components/ui/projectLogo";
import ProjectContainer from "./projectContainer";
import Link from "next/link";
import { useProjectStore } from "@/store/projectStore";

export default function ProjectHero() {
  const project = useProjectStore((state) => state.project);
  if (!project) return;

  const renderTitle = () => {
    const { title, name, altName, color } = project;

    let nameIndex = title.toLowerCase().indexOf(name.toLowerCase());
    let matchedName = name;

    if (nameIndex === -1 && altName) {
      nameIndex = title.toLowerCase().indexOf(altName.toLowerCase());
      matchedName = altName;
    }

    if (nameIndex === -1) {
      return <span>{title}</span>;
    }

    const beforeName = title.slice(0, nameIndex);
    const nameMatch = title.slice(nameIndex, nameIndex + matchedName.length);
    const afterName = title.slice(nameIndex + matchedName.length);

    return (
      <>
        {beforeName}
        <span className={`text-${color}`}>{nameMatch}</span>
        {afterName}
      </>
    );
  };
  return (
    <ProjectContainer padding="large">
      <ProjectLogo project={project} size="lg" />
      <h1
        className={`mt-4 text-3xl/14 2xl:text-4xl/14 px-4 sm:px-40 lg:px-92 xl:px-120 2xl:px-150 font-bold`}
      >
        {renderTitle()}
      </h1>
      <p className="text-gray-800 text-lg/8 mt-4 mb-12 px-4 sm:px-40 lg:px-92 xl:px-120 2xl:px-150">
        {project.pageDescription}
      </p>
      <Link href="#about">
        <Button type="button" color={project.color} hover="inverted">
          Learn More
        </Button>
      </Link>
    </ProjectContainer>
  );
}
