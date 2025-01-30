"use client";

import { useRef } from "react";

export default function HamburgerButton({ onClick, className }) {
  const buttonRef = useRef(null);
  const firstBarRef = useRef(null);
  const secondBarRef = useRef(null);

  function Animate() {
    buttonRef.current.classList.toggle("relative");
    buttonRef.current.classList.toggle("space-y-2");

    // Rotate the first bar to the right 45 degrees
    firstBarRef.current.classList.toggle("absolute");
    firstBarRef.current.classList.toggle("rotate-45");

    // Rotate the second bar to the left 45 degrees
    secondBarRef.current.classList.toggle("-rotate-45");
  }

  return (
    <button
      className={"space-y-2 desktop:hidden " + className}
      onClick={() => {
        onClick();
        Animate();
      }}
      ref={buttonRef}
    >
      <div
        className="h-[2px] w-[28px] rounded-full bg-white"
        ref={firstBarRef}
      ></div>
      <div
        className="h-[2px] w-[28px] rounded-full bg-white"
        ref={secondBarRef}
      ></div>
    </button>
  );
}
