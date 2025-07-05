import MemberCard from "../cards/memberCard";
import { Montserrat } from "next/font/google";
import Head from "../ui/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const memberList = [
  {
    id: 1,
    name: "Jules Albert Deonn S. Lansangan",
    profilePicture: "/profile-pictures/deonn-lansangan.png",
  },
  {
    id: 2,
    name: "Katherine R. Maglalang",
    profilePicture: "/profile-pictures/katherine-maglalang.jpeg",
  },
  {
    id: 3,
    name: "Katherine Ysabelle B. Medina",
    profilePicture: "/profile-pictures/katherine-medina.png",
  },
  {
    id: 4,
    name: "Aireesh Mae G. Pineda",
    profilePicture: "/profile-pictures/aireesh-pineda.jpg",
  },
];
export default function Members() {
  return (
    <section className={`py-12 bg-gray-200 ${montserrat.className}`}>
      <Head>Meet the Team</Head>
      <div
        className={`p-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-12`}
      >
        {memberList.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            profilePicture={member.profilePicture}
          />
        ))}
      </div>
    </section>
  );
}
