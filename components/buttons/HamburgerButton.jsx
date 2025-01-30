"use client";

export default function HamburgerButton({ onClick }) {
  return (
    <button className="space-y-2 desktop:hidden">
      <div className="h-[2px] w-[32px] rounded-full bg-white"></div>
      <div className="h-[2px] w-[32px] rounded-full bg-white"></div>
      <div className="h-[2px] w-[32px] rounded-full bg-white"></div>
    </button>
  );
}
