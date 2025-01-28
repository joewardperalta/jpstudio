"use client";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import Image from "next/image";

export default function ServiceCard({ title, description, img, className }) {
  return (
    <div className={`service-card ${className}`}>
      <div className="max-w-[34.25rem]">
        {/* Description */}
        <div>
          <SectionHeading>{title}</SectionHeading>
          <p className="text-base mb-10 text-gray">{description}</p>
        </div>

        {/* CTA buttons */}
        <div className="space-x-8">
          <PrimaryButton className="bg-black text-white">
            Get Started
          </PrimaryButton>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>
      </div>

      {/* Video showing the process */}
      <div>
        <Image
          className="rounded-5xl max-h-[37.5rem] object-cover"
          src={img.src}
          width={4000}
          height={4000}
          alt={img.alt}
        />
      </div>
    </div>
  );
}
