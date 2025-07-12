"use client";
import ProfilePicture from "../ui/profilePicture";
import Link from "next/link";
import { Member } from "@/types";
import { useMemberStore } from "@/store/memberStore";

export default function MemberCard({ member }: { member: Member }) {
  const setMember = useMemberStore((state) => state.setMember);

  function handleClick() {
    setMember(member);
  }
  return (
    <Link
      href={`/profile/${member.username}`}
      className="bg-white max-w-xs h-full p-10 flex flex-col items-center text-center font-bold rounded-lg cursor-pointer hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300"
      onClick={handleClick}
    >
      <ProfilePicture
        name={member.name}
        path={member.profilePicture}
        size="small"
      />
      <h3 className="mt-4 text-2xl/10 text-primary">{member.name}</h3>
    </Link>
  );
}
