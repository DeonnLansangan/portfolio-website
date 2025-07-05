import ProfilePicture from "../ui/profilePicture";

export default function MemberCard({
  name,
  profilePicture,
}: {
  name: string;
  profilePicture: string;
}) {
  return (
    <div className="bg-white max-w-xs h-full p-10 flex flex-col items-center text-center font-bold rounded-lg hover:-translate-y-2 shadow-xl hover:shadow-2xl transition duration-300">
      <ProfilePicture path={profilePicture} />
      <h3 className="mt-4 text-2xl/10 text-primary">{name}</h3>
    </div>
  );
}
