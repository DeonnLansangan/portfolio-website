import MemberCard from "../cards/memberCard";
import Head from "../ui/head";
import { memberList } from "@/data/memberList";

export default function Members({
  header,
  subheader,
  showContact = false,
  align = "center",
  selectedMembers,
  color = "primary",
}: {
  header?: string;
  subheader?: string;
  showContact?: boolean;
  align?: "start" | "center";
  selectedMembers?: number[];
  color?: "primary" | "maroon";
}) {
  const gridColumns: { [key: number]: string } = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };
  return (
    <section id="members" className="py-12 bg-gray-200">
      <Head>{header}</Head>
      <p className="text-center text-base/7 text-gray-700 px-2 md:px-16">
        {subheader}
      </p>
      <div
        className={`p-10 grid ${gridColumns[selectedMembers ? selectedMembers.length : 4]} place-items-center gap-12 md:gap-28 lg:gap-8`}
      >
        {selectedMembers
          ? memberList
              .filter((member) => selectedMembers.includes(member.id))
              .map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  showContact={showContact}
                  align={align}
                  color={color}
                />
              ))
          : memberList.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                showContact={showContact}
                align={align}
                color={color}
              />
            ))}
      </div>
    </section>
  );
}
