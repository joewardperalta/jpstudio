import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";

export default function Nav() {
  return (
    <div className="flex items-center justify-between bg-black px-17 py-5 text-white">
      {/* Logo */}
      <Link href="/">
        <Image
          className="h-fit w-fit"
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
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/agency">Agency</Link>
          </li>
          <li>
            <Link href="/proposal">
              <PrimaryButton className="bg-primary px-10 text-[16px]">
                Get Started
              </PrimaryButton>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
