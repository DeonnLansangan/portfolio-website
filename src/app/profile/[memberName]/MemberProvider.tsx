"use client";
import { useEffect, ReactNode } from "react";
import { useMemberStore } from "@/store/memberStore";
import { Member } from "@/types";

export default function MemberProvider({
  member,
  children,
}: {
  member: Member;
  children: ReactNode;
}) {
  const setMember = useMemberStore((state) => state.setMember);

  useEffect(() => {
    setMember(member);
  }, [member, setMember]);

  return <>{children}</>;
}
