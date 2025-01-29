"use client";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./buttons/PrimaryButton";
import Image from "next/image";

export default function ServiceCard({ title, description, img, className }) {
  return (
    <div className={`service-card ${className}`}>
      <div className="max-w-[34.25rem]">
        {/* Description */}
        <div>
          <SectionHeading>{title}</SectionHeading>
          <p className="mb-10 text-base text-gray">{description}</p>
        </div>

        {/* CTA buttons */}
        <div className="space-x-8">
          <PrimaryButton className="bg-black text-white">
            <Link href="/proposal">Get Started</Link>
          </PrimaryButton>
        </div>
      </div>

      {/* Video showing the process */}
      <div>
        <Image
          className="max-h-[37.5rem] rounded-5xl object-cover"
          src={img.src}
          width={4000}
          height={4000}
          alt={img.alt}
        />
      </div>
    </div>
  );
}
