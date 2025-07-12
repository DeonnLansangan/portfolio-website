import MemberDescription from "@/components/layout/memberDescription";
import MemberProvider from "./MemberProvider";
import { memberList } from "@/data/memberList";
import { notFound } from "next/navigation";
import MemberSkills from "@/components/layout/memberSkills";
import MemberExperience from "@/components/layout/memberExperience";

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
    </MemberProvider>
  );
}
