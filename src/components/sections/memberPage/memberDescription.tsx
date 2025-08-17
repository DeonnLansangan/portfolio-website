"use client";
import Button from "@/components/ui/button";
import ProfilePicture from "@/components/ui/profilePicture";
import { useMediaQuery } from "@mantine/hooks";
import { useMemberStore } from "@/store/memberStore";
import FadeIn from "@/components/ui/fadeIn";

export default function MemberDescription() {
  const isLargeScreen = useMediaQuery("(min-width: 75em", false);
  const member = useMemberStore((state) => state.member);
  if (!member) return null;

  return (
    <section
      id="about"
      className="bg-gray-100 grid grid-cols-1 place-items-center pt-16 pb-44 md:pb-56 md:px-8 md:pt-20 lg:pb-64 xl:pb-96 xl:pt-48 xl:grid-cols-3 "
    >
      <div className="lg:place-self-center xl:place-self-end xl:mr-8">
        <FadeIn>
          <ProfilePicture
            name={member.name}
            path={member.profilePicture}
            size={isLargeScreen ? "xl" : "large"}
            color="primary"
          />
        </FadeIn>
      </div>
      <div className="text-center xl:text-left xl:col-span-2">
        <FadeIn>
          <h2 className="text-4xl/14 px-12 lg:px-0 mb-4 font-bold">
            Hi, I am <span className="text-primary">{member.name}</span>
          </h2>
          <p className="text-base/8 mb-4 px-8 xl:pl-0 xl:pr-40">
            {member.description}
          </p>
          <a href={member.resume} target="_blank">
            <Button hover="tinted" color="primary">
              View Resume
            </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
