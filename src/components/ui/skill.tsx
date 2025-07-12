import Image from "next/image";

export default function Skill({ name, path }: { name: string; path: string }) {
  return (
    <div className="flex flex-col items-center mb-12 font-bold">
      <div className="w-28 h-28 relative">
        <Image
          src={path}
          alt={`${name} logo`}
          sizes="100%"
          fill
          className="object-contain hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <p>{name}</p>
    </div>
  );
}
