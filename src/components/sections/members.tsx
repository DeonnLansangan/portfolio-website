import MemberCard from "../cards/memberCard";
import Head from "../ui/head";
import { memberList } from "@/data/memberList";

export default function Members({
  header,
  subheader,
  showContact = false,
  align = "center",
}: {
  header?: string;
  subheader?: string;
  showContact?: boolean;
  align?: "start" | "center";
}) {
  return (
    <section className="py-12 bg-gray-200">
      <Head>{header}</Head>
      <p className="text-center text-base/7 text-gray-700 px-2 md:px-16">
        {subheader}
      </p>
      <div
        className={`p-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-12`}
      >
        {memberList.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            showContact={showContact}
            align={align}
          />
        ))}
      </div>
    </section>
  );
}
