import Wrapper from "./Wrapper";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

export default function CallToAction({ text }) {
  return (
    <section className="bg-lightPurple">
      <Wrapper>
        <div className="mx-auto max-w-[67.25rem]">
          <SectionHeading className="text-center text-[5.75rem]">
            {text}
          </SectionHeading>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-8">
            <Link href="/proposal">
              <PrimaryButton className="bg-black text-white">
                Get Started
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
