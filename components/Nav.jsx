"use client";

import Image from "next/image";
import PrimaryButton from "./buttons/PrimaryButton";
import DropdownButton from "./buttons/DropdownButton";
import { useRef } from "react";

// JSON data
import services from "@/data/services.json";
import HamburgerButton from "./buttons/HamburgerButton";

export default function Nav({ className }) {
  // Nav reference
  const navRef = useRef(null);

  // Disable scrolling behavior when nav is active on small device
  function disableScroll() {
    document.body.classList.toggle("disable-scrolling");
  }

  // Toggle nav on/off
  function toggle() {
    navRef.current.classList.toggle("hidden");
    navRef.current.classList.toggle("flex");
  }

  return (
    <div className={`nav ${className}`}>
      {/* Logo */}
      <a className="z-10" href="/">
        <Image
          className="h-auto w-[7.875rem] tablet:w-[9.3125rem] desktop:w-52"
          src="/images/jpstudio logo white.png"
          alt="jpstudio logo"
          width={149}
          height={36}
        />
      </a>

      {/* Nav */}
      <nav
        className="fixed left-0 top-0 hidden h-full w-full items-center bg-black desktop:relative desktop:block desktop:h-fit desktop:w-fit"
        ref={navRef}
      >
        <ul className="mx-auto flex w-fit flex-col gap-[4.5rem] text-[1rem] desktop:flex-row desktop:items-center">
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <DropdownButton title="Services" items={services} />
          </li>
          <li>
            <a href="/agency">Agency</a>
          </li>
          <li>
            <a href="/proposal" className="hidden desktop:block">
              <PrimaryButton className="bg-primary px-10 tablet:text-sm">
                Get Started
              </PrimaryButton>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-5 tablet:gap-9 desktop:hidden">
        {/* CTA */}
        <a href="/proposal" className="z-10">
          <PrimaryButton className="bg-primary px-4 py-2 tablet:px-10 tablet:py-4 tablet:text-sm">
            Get Started
          </PrimaryButton>
        </a>

        {/* Hamburger Button */}
        <HamburgerButton
          className="z-10"
          onClick={() => {
            toggle();
            disableScroll();
          }}
        />
      </div>
    </div>
  );
}
