import MemberDescription from "@/components/layout/memberDescription";
import { memberList } from "@/data/memberList";
import { notFound } from "next/navigation";

export default async function MemberPage({
  params,
}: {
  params: Promise<{ memberName: string }>;
}) {
  const { memberName } = await params;
  const member = memberList.find((member) => member.userName === memberName);

  if (!member) notFound();

  return <MemberDescription member={member} />;
}
