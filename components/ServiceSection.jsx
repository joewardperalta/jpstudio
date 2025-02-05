import Wrapper from "./Wrapper";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./buttons/PrimaryButton";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSection({ title, description, img, className }) {
  return (
    <section
      className={className}
      id="custom-web-design-and-development-section"
    >
      <Wrapper>
        <div className="flex flex-col justify-between gap-8 tablet:gap-14 desktop:flex-row desktop:items-center desktop:gap-50">
          {/* Description */}
          <div className="tablet:flex tablet:gap-16 desktop:block desktop:max-w-[34.25rem]">
            <SectionHeading className="w-full tablet:mb-8">
              {title}
            </SectionHeading>
            <div className="w-full">
              <p className="mb-8 text-sm text-gray tablet:mb-10 tablet:text-base">
                {description}
              </p>

              {/* CTA buttons */}
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  <Link href="/proposal">Get Started</Link>
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Service Image */}
          <div className="h-auto overflow-hidden rounded-xl tablet:rounded-5xl desktop:h-[700px]">
            <Image
              className="h-full w-full object-cover object-top"
              src={img.src}
              width={1809}
              height={1400}
              alt={img.alt}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
