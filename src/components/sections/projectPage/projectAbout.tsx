"use client";
import FeatureCard from "@/components/cards/featureCard";
import Head from "@/components/ui/head";
import ProjectContainer from "./projectContainer";
import { useProjectStore } from "@/store/projectStore";
import FadeIn from "@/components/ui/fadeIn";

export default function ProjectAbout() {
  const project = useProjectStore((state) => state.project);
  if (!project) return;
  const colorClasses = {
    primary: "text-primary",
    maroon: "text-maroon",
  };

  return (
    <ProjectContainer id="about">
      <Head>
        About{" "}
        <span className={colorClasses[project.color]}>{project.name}</span>
      </Head>
      <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {project.features.map((feature) => (
          <FadeIn key={feature.title}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </FadeIn>
        ))}
      </div>
    </ProjectContainer>
  );
}
