"use client";
import Button from "@/components/ui/button";
import ProfilePicture from "@/components/ui/profilePicture";
import { useMediaQuery } from "@mantine/hooks";

interface Member {
  id: number;
  name: string;
  userName: string;
  profilePicture: string;
  description: string;
}

export default function MemberDescription({ member }: { member: Member }) {
  const isLargeScreen = useMediaQuery("(min-width: 75em");
  return (
    <section className="grid grid-cols-1 place-items-center mt-8 md:px-8 xl:grid-cols-3 xl:pt-28">
      <div className="lg:place-self-center xl:place-self-end xl:mr-8">
        <ProfilePicture
          name={member.name}
          path={member.profilePicture}
          size={isLargeScreen ? "xl" : "large"}
        />
      </div>
      <div className="text-center xl:text-left xl:col-span-2">
        <h2 className="text-4xl/14 px-12 lg:px-0 mb-4 font-bold">
          Hi, I am <span className="text-primary">{member.name}</span>
        </h2>
        <p className="text-base/8 mb-4 px-8 xl:pl-0 xl:pr-40">
          {member.description}
        </p>
        <Button type="tinted" color="primary">
          View Resume
        </Button>
      </div>
    </section>
  );
}
