import Image from "next/image";
import Title from "@/components/Title";
import Wrapper from "@/components/wrapper";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function Home() {
  return (
    <main>
      <section className="bg-black" id="hero-section">
        <Wrapper>
          <div className="max-w-[73.5rem] mx-auto flex flex-col items-center my-20">
            <Title className="text-center text-white">
              We build modern and professional website for your business
            </Title>
            <PrimaryButton className="bg-primary text-white">
              Get Started
            </PrimaryButton>
          </div>
          <div>
            <Image
              className="rounded-5xl"
              src="/images/comfort-sofa.jpg"
              width={3840}
              height={2160}
              alt="hero image of a sofa for a furniture E-commerce website"
            />
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
