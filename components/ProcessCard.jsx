import Image from "next/image";

export default function ProcessCard({ img, title, description }) {
  return (
    <div className="min-w-[39.75rem]">
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
      <h3 className="mb-2 text-[2rem]">{title}</h3>

      {/* Brief description */}
      <p className="text-base leading-[1.7] text-gray">{description}</p>
    </div>
  );
}
