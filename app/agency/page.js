import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

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
    </main>
  );
}
