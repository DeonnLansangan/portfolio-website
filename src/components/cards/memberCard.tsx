"use client";
import ProfilePicture from "../ui/profilePicture";
import Link from "next/link";
import { Member } from "@/types";
import { useMemberStore } from "@/store/memberStore";
import ContactForm from "../sections/contactForm";

interface MemberCardProps {
  showContact: boolean;
  member: Member;
  align: "start" | "center";
}

function ProfileLink({
  member,
  children,
}: {
  member: Member;
  children: React.ReactNode;
}) {
  const setMember = useMemberStore((state) => state.setMember);

  function handleClick() {
    setMember(member);
  }
  return (
    <Link
      href={`/profile/${member.username}`}
      className={`cursor-pointer h-full`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

function MemberCardContainer({
  align = "center",
  children,
}: {
  align?: "start" | "center";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-center ${align === "start" && "sm:items-start"} bg-white max-w-80 h-full p-10 rounded-lg hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300`}
    >
      {children}
    </div>
  );
}

function CardContent({
  showContact,
  member,
  align = "center",
}: MemberCardProps) {
  const profilePicture = (
    <ProfilePicture
      name={member.name}
      path={member.profilePicture}
      size="small"
    />
  );
  return (
    <>
      {showContact ? (
        <ProfileLink member={member}>{profilePicture}</ProfileLink>
      ) : (
        profilePicture
      )}

      <h3
        className={`mt-4 ${showContact ? "text-sm mb-24" : "text-xl/10"} text-center ${align === "start" && "sm:text-left"} text-primary font-bold`}
      >
        {member.name}
      </h3>
    </>
  );
}

export default function MemberCard({
  showContact = false,
  member,
  align,
}: MemberCardProps) {
  return (
    <>
      {showContact ? (
        <MemberCardContainer align="start">
          <CardContent
            showContact={showContact}
            member={member}
            align={align}
          />
          <div className="place-self-end -mt-12 lg:-mt-16">
            <ContactForm member={member} />
          </div>
        </MemberCardContainer>
      ) : (
        <ProfileLink member={member}>
          <MemberCardContainer>
            <CardContent
              showContact={showContact}
              member={member}
              align={align}
            />
          </MemberCardContainer>
        </ProfileLink>
      )}
    </>
  );
}
