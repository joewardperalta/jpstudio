"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function QuestionAndAnswerCard({ question, answer }) {
  const paragraphAnswerRef = useRef(null);

  // This function will open/close the answer text box
  function toggle() {
    paragraphAnswerRef.current.classList.toggle("mt-8");
    paragraphAnswerRef.current.classList.toggle("h-0");
  }

  return (
    <div className="border-b border-gray py-[3.625rem]">
      <div className="flex justify-between gap-8">
        <p className="text-[2rem]">{question}</p>
        <button onClick={toggle}>
          <Image
            src="/icons/plus_icon.png"
            alt="plus icon"
            width={40}
            height={40}
          />
        </button>
      </div>

      <p className="h-0 overflow-hidden" ref={paragraphAnswerRef}>
        {answer}
      </p>
    </div>
  );
}
