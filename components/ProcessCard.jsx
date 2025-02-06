import Image from "next/image";
import SubHeading from "./SubHeading";

export default function ProcessCard({ img, title, description, className }) {
  return (
    <div className={`process-card ${className}`}>
      {/* Cover image */}
      <div className="mb-4 overflow-hidden rounded-4xl">
        <Image
          className="h-[38.9375rem] w-full object-cover"
          src={img.src}
          alt={img.alt}
          width={2000}
          height={2000}
        />
      </div>

      {/* Title */}
      <SubHeading className="tablet:mb-2">{title}</SubHeading>

      {/* Brief description */}
      <p className="w-full whitespace-pre-wrap text-sm leading-[1.7] text-gray tablet:text-base">
        {description}
      </p>
    </div>
  );
}
