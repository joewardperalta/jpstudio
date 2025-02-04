"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function QuestionAndAnswerCard({ question, answer, className }) {
  const paragraphAnswerRef = useRef(null);

  // This function will open/close the answer text box
  function toggle() {
    paragraphAnswerRef.current.classList.toggle("mt-8");
    paragraphAnswerRef.current.classList.toggle("h-0");
  }

  return (
    <div className={`question-and-answer-card ${className}`}>
      <div className="flex justify-between gap-8">
        <p className="laptop:text-[2rem] text-[1.5rem]">{question}</p>
        <button onClick={toggle}>
          <Image
            src="/icons/plus_icon.png"
            alt="plus icon"
            width={40}
            height={40}
          />
        </button>
      </div>

      <p
        className="laptop:text-[1.25rem] h-0 overflow-hidden text-base"
        ref={paragraphAnswerRef}
      >
        {answer}
      </p>
    </div>
  );
}
