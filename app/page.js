import Image from "next/image";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SectionHeading from "@/components/SectionHeading";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Video from "@/components/Video";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-black" id="hero-section">
        <Wrapper>
          <div className="max-w-[73.5rem] mx-auto flex flex-col items-center my-20">
            <Title className="text-center text-white">
              We build modern and professional website for your business
            </Title>

            {/* CTA button */}
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
              priority
            />
          </div>
        </Wrapper>
      </section>

      {/* Custom Web Design & Development Section */}
      <section id="custom-web-design-and-development-section">
        <Wrapper>
          <div className="flex gap-50 items-center">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading>Custom Web Design & Development</SectionHeading>
              <p className="text-base mb-10">
                Our website design and development service builds a clean,
                easy-to-use website that highlights your business and attracts
                customers. With a simple design and smooth functionality, your
                site will help you connect with visitors and grow your business.
              </p>

              {/* CTA buttons */}
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  Get Started
                </PrimaryButton>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>

            {/* Video showing the process for designing a website */}
            <div>
              <Video src="/videos/web-design-figma.mp4" />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Hosting & Domain Setup Section */}
      <section className="bg-lightBlue" id="hosting-and-domain-setup-section">
        <Wrapper>
          <div className="flex gap-50 items-center">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading>Hosting & Domain Setup</SectionHeading>
              <p className="text-base mb-10">
                Our domain setup service ensures your business gets a
                professional, secure, and easy-to-find online address without
                the hassle of managing technical details. A well-chosen domain
                boosts your credibility, improves customer access, and sets the
                foundation for your online success.
              </p>

              {/* CTA buttons */}
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  Get Started
                </PrimaryButton>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>

            {/* Video showing the process for domain setup */}
            <div>
              <Video src="/videos/web-design-figma.mp4" />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* SEO Optimization Section */}
      <section id="seo-optimization-section">
        <Wrapper>
          <div className="flex gap-50 items-center">
            <div className="max-w-[34.25rem]">
              {/* Description */}
              <SectionHeading>SEO Optimization</SectionHeading>
              <p className="text-base mb-10">
                Our SEO optimization service helps your business rank higher on
                search engines, making it easier for customers to find you
                online. By driving more traffic to your website, you&apos;ll
                gain increased visibility, attract potential customers, and grow
                your business effectively.
              </p>

              {/* CTA buttons */}
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  Get Started
                </PrimaryButton>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>

            <div>
              <Video src="/videos/web-design-figma.mp4" />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Analytics Integration Section */}
      <section className="bg-lightPurple" id="analytics-integration-section">
        <Wrapper>
          <div className="flex gap-50 items-center">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading>Analytics Integration</SectionHeading>
              <p className="text-base mb-10">
                Our analytics integration service helps you understand how
                customers interact with your website so you can make smarter
                decisions for your business. By tracking what works and what
                doesn&apos;t, you can improve your website and attract more
                visitors.
              </p>
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  Get Started
                </PrimaryButton>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>

            {/* Service Process Video */}
            <div>
              <Video src="/videos/web-design-figma.mp4" />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* E-commerce Functionality Section */}
      <section id="ecommerce-functionality-section">
        <Wrapper>
          <div className="flex gap-50 items-center">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading>E-commerce Functionality</SectionHeading>
              <p className="text-base mb-10">
                Our e-commerce integration service helps you set up an online
                store where customers can easily browse and buy your products.
                It allows you to reach more customers, sell anytime, and grow
                your business without needing a physical store.
              </p>
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  Get Started
                </PrimaryButton>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>

            <div>
              <Video src="/videos/web-design-figma.mp4" />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Maintenance Support Section */}
      <section className="bg-lightYellow" id="maintenance-support-section">
        <Wrapper>
          <div className="flex gap-50 items-center">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading>Maintenance Support</SectionHeading>
              <p className="text-base mb-10">
                Our maintenance service keeps your website running smoothly and
                up to date, so you don’t have to worry about technical issues.
                It ensures your site stays secure, works properly, and continues
                to give your customers a great experience.
              </p>
              <div className="space-x-8">
                <PrimaryButton className="bg-black text-white">
                  Get Started
                </PrimaryButton>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>

            <div>
              <Video src="/videos/web-design-figma.mp4" />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
