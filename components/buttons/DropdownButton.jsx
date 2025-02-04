"use client";
import { useRef } from "react";
import Image from "next/image";

export default function DropdownButton({ title, items = [], className }) {
  const itemsRef = useRef(null);

  // Expand the dropdown list
  function expand() {
    itemsRef.current.classList.toggle("hidden");
  }

  return (
    <button className={`dropdown-button ${className}`} onClick={expand}>
      <div className="flex items-center gap-2">
        <span className="text-left">{title}</span>
        <Image
          className="h-auto w-6"
          src="/icons/arrow_down_icon.png"
          alt="arrow down icon"
          width={64}
          height={64}
        />
      </div>

      {/* Drop down items */}
      <div
        className="absolute top-8 hidden w-fit space-y-5 rounded-lg bg-white px-8 py-8 text-black"
        ref={itemsRef}
      >
        {items.map((item) => (
          <a
            key={item.id}
            className="block text-nowrap text-left"
            href={item.pageUrl}
          >
            {item.title}
          </a>
        ))}
      </div>
    </button>
  );
}
