import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ img, name, brief, siteUrl = "" }) {
  return (
    <Link href={siteUrl} target="_blank">
      {/* Project mockup image */}
      <div className="mb-4">
        <Image
          className="rounded-5xl"
          src={img.src}
          width={2362}
          height={1653}
          alt={img.alt}
        />
      </div>

      {/* Project description */}
      <div className="space-y-2">
        <h3 className="text-subHeading">{name}</h3>
        <p className="text-base text-gray">{brief}</p>
      </div>
    </Link>
  );
}
