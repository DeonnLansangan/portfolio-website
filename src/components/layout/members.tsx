import MemberCard from "../cards/memberCard";
import { Montserrat } from "next/font/google";
import Head from "../ui/head";
import { memberList } from "@/data/memberList";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Members() {
  return (
    <section className={`py-12 bg-gray-200 ${montserrat.className}`}>
      <Head>Meet the Team</Head>
      <div
        className={`p-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-12`}
      >
        {memberList.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
