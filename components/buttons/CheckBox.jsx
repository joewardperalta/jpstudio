"use client";

import { useRef } from "react";

export default function CheckBox({ id, name, value }) {
  const labelRef = useRef(null);

  // Highlight the selected radio button
  function select() {
    labelRef.current.classList.toggle("bg-black");
    labelRef.current.classList.toggle("text-white");
  }

  return (
    <div className="w-fit cursor-pointer overflow-hidden rounded-full border border-black">
      <input
        className="hidden"
        type="checkbox"
        id={id}
        name={name}
        value={value}
      />
      <label
        className="inline-block cursor-pointer px-10 py-4 text-2xl leading-[1.7]"
        htmlFor={id}
        onClick={select}
        ref={labelRef}
      >
        {value}
      </label>
    </div>
  );
}
