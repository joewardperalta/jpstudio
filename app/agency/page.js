import SectionHeading from "@/components/SectionHeading";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

// JSON Data
import values from "@/data/values.json";
import team from "@/data/team.json";
import CallToAction from "@/components/CallToAction";

export default function page() {
  return (
    <main>
      <section id="hero-section">
        <Wrapper>
          <div className="mb-24">
            <Title className="text-center">Modernity & Professionalism</Title>
            <SubTitle className="text-center">
              We are a professional web design agency specializing in creating
              modern, attractive, and user-focused websites designed to drive
              customer conversion and business growth.
            </SubTitle>
          </div>

          <Image
            className="h-auto w-full rounded-[2rem]"
            src="/images/Creative business product image.png"
            alt="Product image of a website featuring their hero section for a creative business"
            width={1920}
            height={1080}
          />
        </Wrapper>
      </section>

      <section id="mission-and-vision-section">
        <div className="mx-auto max-w-[90rem]">
          <Wrapper>
            {/* Mission */}
            <div className="flex flex-col justify-between border-b border-black py-17 laptop:flex-row laptop:gap-20">
              <SectionHeading className="w-full">Mission</SectionHeading>
              <p className="w-full text-xl leading-[1.7] tablet:text-2xl">
                Our mission is to create impactful web designs that drive
                growth, enhance brand presence, and foster meaningful
                connections with your customers.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col justify-between py-17 laptop:flex-row laptop:gap-20">
              <SectionHeading className="w-full">Vision</SectionHeading>
              <p className="w-full text-xl leading-[1.7] tablet:text-2xl">
                To be the trusted partner for businesses, empowering them to
                achieve their goals through innovative and user-centric web
                solutions.
              </p>
            </div>
          </Wrapper>
        </div>
      </section>

      <section className="bg-lightPurple" id="values-section">
        <Wrapper>
          <SectionHeading className="max-w-[34.25rem]">
            The values we bring to your business
          </SectionHeading>

          {/* List of agency values */}
          <div className="flex flex-wrap gap-16" id="agency-values">
            {values.map((value) => (
              <div className="max-w-[22.25rem]" key={value.id}>
                <div className="mb-3 flex gap-3">
                  <Image
                    src="/vectors/arrow-right-long.svg"
                    alt="arrow right icon"
                    width={25}
                    height={16}
                  />
                  <h3 className="text-xl font-medium capitalize leading-[1.7]">
                    {value.title}
                  </h3>
                </div>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="team-section">
        <Wrapper>
          <SectionHeading className="text-center">
            Meet our professional team
          </SectionHeading>

          {/* List of team members */}
          <div className="flex flex-col gap-8 tablet:flex-row laptop:gap-16">
            {team.map((member) => (
              <div key={member.id} className="">
                {/* Team member's profile photo */}
                <Image
                  className="mb-4 h-auto w-full rounded-2xl"
                  src={member.img.src}
                  alt={member.img.alt}
                  width={525}
                  height={700}
                />

                {/* Team member's name and role */}
                <div>
                  <h3 className="text-xl font-medium leading-[1.7] text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* CTA Section */}
      <CallToAction text="Start growing your business' online presence!" />
    </main>
  );
}
