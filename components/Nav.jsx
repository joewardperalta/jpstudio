import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";
import DropdownButton from "./buttons/DropdownButton";

// JSON data
import services from "@/data/services.json";
import HamburgerButton from "./buttons/HamburgerButton";

export default function Nav({ className }) {
  return (
    <div className={`nav ${className}`}>
      {/* Logo */}
      <Link href="/">
        <Image
          className="h-auto w-52"
          src="/images/jpstudio logo white.png"
          alt="jpstudio logo"
          width={149}
          height={36}
        />
      </Link>

      {/* Nav */}
      <nav>
        <ul className="flex items-center gap-[4.5rem] text-[1rem]">
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <DropdownButton title="Services" items={services} />
          </li>
          <li>
            <Link href="/agency">Agency</Link>
          </li>
          <li>
            <Link href="/proposal">
              <PrimaryButton className="bg-primary px-10 text-sm">
                Get Started
              </PrimaryButton>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <HamburgerButton />
    </div>
  );
}
