import Image from "next/image";

export default function ProfilePicture({
  name,
  path,
  size,
}: {
  name: string;
  path: string;
  size: "small" | "large" | "xl";
}) {
  const sizeClasses = {
    small: 160,
    large: 250,
    xl: 300,
  };
  return (
    <Image
      src={path}
      alt={`Picture of ${name}`}
      className="rounded-full border-2 border-primary object-cover hover:scale-105 transition duration-300 ease-in-out"
      width={sizeClasses[size]}
      height={sizeClasses[size]}
    />
  );
}
