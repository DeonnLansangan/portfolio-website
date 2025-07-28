"use client";
import FeatureCard from "@/components/cards/featureCard";
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
    <section className="flex flex-col items-center py-36">
      <Head>
        About{" "}
        <span className={colorClasses[project.color]}>{project.name}</span>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {project.features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
