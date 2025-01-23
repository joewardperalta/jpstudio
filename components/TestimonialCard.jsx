import Image from "next/image";
import SecondaryButton from "./buttons/SecondaryButton";

export default function TestimonialCard({ author, avatar, message }) {
  return (
    <div className="rounded-[4rem] border border-lightGray py-30 px-17 min-w-[37.5rem] w-[37.5rem] inline-block ">
      <div className="flex gap-5 mb-[2.1875rem]">
        {/* Avatar */}
        <Image
          className="rounded-full bg-gray"
          src={avatar.src}
          width={56}
          height={56}
          alt={avatar.alt}
        />

        {/* Name & Role */}
        <div>
          <h3 className="text-[1.125rem] leading-[1.5] font-medium">
            {author}
          </h3>
          <p className="text-[1rem]">Freelance Consultant</p>
        </div>
      </div>

      {/* Message */}
      <p className="mb-[2.1875rem] line-clamp-4">{message}</p>

      <SecondaryButton>Read more</SecondaryButton>
    </div>
  );
}
