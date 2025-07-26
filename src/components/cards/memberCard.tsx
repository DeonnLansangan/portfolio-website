"use client";
import ProfilePicture from "../ui/profilePicture";
import Link from "next/link";
import { Member } from "@/types";
import { useMemberStore } from "@/store/memberStore";
import ContactForm from "../sections/contactForm";

export default function MemberCard({
  showContact = false,
  member,
  align = "center",
}: {
  showContact?: boolean;
  member: Member;
  align?: "start" | "center";
}) {
  const setMember = useMemberStore((state) => state.setMember);

  function handleClick() {
    setMember(member);
  }
  return (
    <div
      className={`flex flex-col justify-between bg-white max-w-80 h-full p-10 rounded-lg hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300`}
    >
      <Link
        href={`/profile/${member.username}`}
        className={`cursor-pointer flex flex-col items-center text-center ${align === "start" && "sm:items-start sm:text-left"}`}
        onClick={handleClick}
      >
        <ProfilePicture
          name={member.name}
          path={member.profilePicture}
          size="small"
        />
        <h3
          className={`mt-4 ${showContact ? "text-sm mb-24" : "text-xl/10"} text-primary font-bold`}
        >
          {member.name}
        </h3>
      </Link>
      {showContact && (
        <div className="place-self-end -mt-12 lg:-mt-16">
          <ContactForm member={member} />
        </div>
      )}
    </div>
  );
}
