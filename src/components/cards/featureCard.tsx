import { HeroIcon } from "../ui/icon";
import { useProjectStore } from "@/store/projectStore";
import { Feature } from "@/types";

export default function FeatureCard({ icon, title, description }: Feature) {
  const project = useProjectStore((state) => state.project);
  const colorClasses = {
    primary: "text-primary",
    maroon: "text-maroon",
  };
  if (!project) return;

  return (
    <div
      className={`bg-white max-w-lg mx-8 p-8 rounded-lg shadow-md hover:shadow-lg`}
    >
      <HeroIcon
        icon={icon}
        className={`${colorClasses[project.color]} size-12 mb-8`}
      />
      <h3
        className={`text-xl mb-2 font-semibold ${colorClasses[project.color]}`}
      >
        {title}
      </h3>
      <p className="text-sm/8">{description}</p>
    </div>
  );
}
