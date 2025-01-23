"use client";
import Image from "next/image";
import SecondaryButton from "./buttons/SecondaryButton";
import { useRef } from "react";

export default function TestimonialCard({ author, avatar, message }) {
  const messageBoxRef = useRef(null);
  const readMoreButtonRef = useRef(null);

  // Expand the message box to read the full text
  function expandMessage() {
    // Expand/unexpand message box
    messageBoxRef.current.classList.toggle("line-clamp-4");

    // Get a reference of the secondary button body text element
    let secondaryButtonTextElement = readMoreButtonRef.current
      .querySelector(".secondary-button-body")
      .querySelector("p");

    // Change the button text to read more/read less
    if (secondaryButtonTextElement.innerText == "Read more") {
      console.log("Read more");
      secondaryButtonTextElement.innerText = "Read less";
    } else {
      console.log("Read less");
      secondaryButtonTextElement.innerText = "Read more";
    }
  }

  return (
    <div className="rounded-[4rem] border border-lightGray py-30 px-17 max-w-[37.5rem] w-full inline-block h-fit">
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
      <p className="mb-[2.1875rem] line-clamp-4" ref={messageBoxRef}>
        {message}
      </p>

      <SecondaryButton onClick={expandMessage} ref={readMoreButtonRef}>
        Read more
      </SecondaryButton>
    </div>
  );
}
