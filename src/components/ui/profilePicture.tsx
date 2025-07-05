import Image from "next/image";

export default function ProfilePicture({ path }: { path: string }) {
  return (
    <Image
      src={path}
      alt="Picture of Deonn Lansangan"
      className="rounded-full border-2 border-primary object-cover hover:scale-105 transition duration-300 ease-in-out"
      width={160}
      height={160}
    />
  );
}
