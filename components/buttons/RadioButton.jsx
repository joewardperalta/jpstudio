"use client";

import { useRef } from "react";

export default function RadioButton({ id, name, value, required = false }) {
  const labelRef = useRef(null);

  // Highlight the selected radio button
  function select() {
    // Get the group of radio buttons that includes the "name" property in its className
    const radioButtons = document.getElementsByClassName("label-" + name);

    for (let radioButton of radioButtons) {
      if (radioButton.classList.contains("bg-black")) {
        radioButton.classList.remove("bg-black");
        radioButton.classList.toggle("text-white");
      }
    }

    // Highlight the selected button with a black background
    labelRef.current.classList.toggle("bg-black");
    labelRef.current.classList.toggle("text-white");
  }

  return (
    <div className="w-fit cursor-pointer overflow-hidden rounded-full border border-black">
      <input
        className="hidden"
        type="radio"
        id={id}
        name={name}
        value={value}
        required={required}
      />
      <label
        className={`inline-block cursor-pointer px-10 py-4 text-2xl leading-[1.7] ${"label-" + name}`}
        htmlFor={id}
        onClick={select}
        ref={labelRef}
      >
        {value}
      </label>
    </div>
  );
}
