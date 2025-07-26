import Welcome from "@/components/sections/welcome";
import Members from "@/components/sections/members";
import Projects from "@/components/sections/projects";
export default function Home() {
  return (
    <div>
      <Welcome />
      <Members header="Meet the Team" />
      <Projects />
    </div>
  );
}
