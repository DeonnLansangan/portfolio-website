import MemberDescription from "@/components/layout/memberPage/memberDescription";
import MemberProvider from "./MemberProvider";
import { memberList } from "@/data/memberList";
import { notFound } from "next/navigation";
import MemberSkills from "@/components/layout/memberPage/memberSkills";
import MemberExperience from "@/components/layout/memberPage/memberExperience";
import MemberProjects from "@/components/layout/memberPage/memberProjects";

export default async function MemberPage({
  params,
}: {
  params: Promise<{ memberName: string }>;
}) {
  const { memberName } = await params;
  const member = memberList.find((member) => member.username === memberName);

  if (!member) notFound();

  return (
    <MemberProvider member={member}>
      <MemberDescription />
      <MemberSkills />
      <MemberExperience />
      <MemberProjects />
    </MemberProvider>
  );
}
