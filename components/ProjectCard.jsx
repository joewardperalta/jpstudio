import Image from "next/image";
import Link from "next/link";
import SubHeading from "./SubHeading";

export default function ProjectCard({
  img,
  name,
  brief,
  siteUrl = "",
  className,
}) {
  return (
    <Link
      className={`project-card ${className}`}
      href={siteUrl}
      target="_blank"
    >
      {/* Project mockup image */}
      <div className="mb-4">
        <Image
          className="rounded-xl tablet:rounded-5xl"
          src={img.src}
          width={2362}
          height={1653}
          alt={img.alt}
        />
      </div>

      {/* Project description */}
      <div className="tablet:space-y-2">
        <SubHeading>{name}</SubHeading>
        <p className="text-sm text-gray tablet:text-base">{brief}</p>
      </div>
    </Link>
  );
}
