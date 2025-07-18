import MemberDescription from "@/components/sections/memberPage/memberDescription";
import MemberProvider from "./MemberProvider";
import { memberList } from "@/data/memberList";
import { notFound } from "next/navigation";
import MemberSkills from "@/components/sections/memberPage/memberSkills";
import MemberExperience from "@/components/sections/memberPage/memberExperience";
import MemberProjects from "@/components/sections/memberPage/memberProjects";
import MemberContact from "@/components/sections/memberPage/memberContact";

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
      <MemberContact />
    </MemberProvider>
  );
}
