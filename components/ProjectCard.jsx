import Image from "next/image";

export default function ProjectCard({ img, title, tagline }) {
  return (
    <div>
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
        <h3 className="text-subHeading">{title}</h3>
        <p className="text-base text-gray">{tagline}</p>
      </div>
    </div>
  );
}