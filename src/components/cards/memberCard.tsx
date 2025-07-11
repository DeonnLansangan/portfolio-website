import ProfilePicture from "../ui/profilePicture";
import Link from "next/link";

export default function MemberCard({
  name,
  userName,
  profilePicture,
}: {
  name: string;
  userName: string;
  profilePicture: string;
}) {
  return (
    <Link
      href={`/profile/${userName}`}
      className="bg-white max-w-xs h-full p-10 flex flex-col items-center text-center font-bold rounded-lg cursor-pointer hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300"
    >
      <ProfilePicture name={name} path={profilePicture} size="small" />
      <h3 className="mt-4 text-2xl/10 text-primary">{name}</h3>
    </Link>
  );
}
