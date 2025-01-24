import Image from "next/image";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SectionHeading from "@/components/SectionHeading";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessCard from "@/components/ProcessCard";
import Link from "next/link";

// JSON Data
import projects from "@/data/projects.json";
import testimonials from "@/data/testimonials.json";
import processes from "@/data/processes.json";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-black" id="hero-section">
        <Wrapper>
          <div className="desktop:mx-auto desktop:my-[4.875rem] desktop:w-[81rem]">
            <Title className="text-center text-white">
              We build modern and professional website for your business
            </Title>

            {/* CTA button */}
            <div className="mx-auto w-fit">
              <PrimaryButton className="bg-primary text-white">
                Get Started
              </PrimaryButton>
            </div>
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
          <div className="flex items-center justify-between gap-50">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading className="mb-8">
                Custom Web Design & Development
              </SectionHeading>
              <p className="mb-10 text-base text-gray">
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

            {/* Service Image */}
            <div className="h-[700px] overflow-hidden rounded-[2rem]">
              <Image
                className="h-full w-full object-cover"
                src="/images/Custom Web Design.png"
                width={1809}
                height={1400}
                alt="Hero image of a window coverings shop website"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Hosting & Domain Setup Section */}
      <section className="bg-lightBlue" id="hosting-and-domain-setup-section">
        <Wrapper>
          <div className="flex items-center justify-between gap-50">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading className="mb-8">
                Hosting & Domain Setup
              </SectionHeading>
              <p className="mb-10 text-base text-gray">
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

            {/* Service Image */}
            <div className="h-[700px] overflow-hidden rounded-[2rem]">
              <Image
                className="h-full w-full object-cover"
                src="/images/Hosting & Domain Setup.png"
                width={1809}
                height={1400}
                alt="Hosting & Domain"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* SEO Optimization Section */}
      <section id="seo-optimization-section">
        <Wrapper>
          <div className="flex items-center justify-between gap-50">
            <div className="max-w-[34.25rem]">
              {/* Description */}
              <SectionHeading className="mb-8">SEO Optimization</SectionHeading>
              <p className="mb-10 text-base text-gray">
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

            {/* Service Image */}
            <div className="h-[700px] overflow-hidden rounded-[2rem]">
              <Image
                className="h-full w-full object-cover"
                src="/images/SEO Optimization.png"
                width={1809}
                height={1400}
                alt="SEO Optimization"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Analytics Integration Section */}
      <section className="bg-lightPurple" id="analytics-integration-section">
        <Wrapper>
          <div className="flex items-center justify-between gap-50">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading className="mb-8">
                Analytics Integration
              </SectionHeading>
              <p className="mb-10 text-base text-gray">
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

            {/* Service Image */}
            <div className="h-[700px] overflow-hidden rounded-[2rem]">
              <Image
                className="h-full w-full object-cover"
                src="/images/Google Analytics.png"
                width={1809}
                height={1400}
                alt="Google Analytics"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* E-commerce Functionality Section */}
      <section id="ecommerce-functionality-section">
        <Wrapper>
          <div className="flex items-center justify-between gap-50">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading className="mb-8">
                E-commerce Functionality
              </SectionHeading>
              <p className="mb-10 text-base text-gray">
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

            {/* Service Image */}
            <div className="h-[700px] overflow-hidden rounded-[2rem]">
              <Image
                className="h-full w-full object-cover"
                src="/images/Ecommerce.png"
                width={1809}
                height={1400}
                alt="Ecommerce Product"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Maintenance Support Section */}
      <section className="bg-lightYellow" id="maintenance-support-section">
        <Wrapper>
          <div className="flex items-center justify-between gap-50">
            {/* Description */}
            <div className="max-w-[34.25rem]">
              <SectionHeading className="mb-8">
                Maintenance Support
              </SectionHeading>
              <p className="mb-10 text-base text-gray">
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

            {/* Service Image */}
            <div className="h-[700px] overflow-hidden rounded-[2rem]">
              <Image
                className="h-full w-full object-cover"
                src="/images/Maintenance Support.png"
                width={1809}
                height={1400}
                alt="Maintenance"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Projects Section */}
      <section id="projects-section">
        <Wrapper>
          <div>
            <SectionHeading>Featured Projects</SectionHeading>
          </div>

          {/* Project list */}
          <div className="flex gap-20">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                img={{
                  src: project.coverImg.src,
                  alt: project.coverImg.alt,
                }}
                name={project.name}
                brief={project.brief}
              />
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Testimonials section */}
      <section id="testimonial section">
        <Wrapper>
          <div>
            <SectionHeading className="text-center">
              What People Are Saying
            </SectionHeading>

            {/* Testimonials */}
            <div className="flex justify-center gap-11">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  author={testimonial.author}
                  avatar={testimonial.avatar}
                  message={testimonial.message}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Team section */}
      <section className="bg-lightGreen" id="team-section">
        <div className="mx-auto flex items-center justify-between gap-[12.5rem] pl-[4.5rem]">
          {/* Brief description of the team */}
          <div className="w-full max-w-[42rem]">
            <SectionHeading className="mb-8">
              Meet the team behind your success
            </SectionHeading>
            <p className="mb-10">
              JPStudio creates modern, user-focused websites designed to drive
              business growth, enhance customer engagement, and boost
              conversions. With expertise in custom web design, SEO
              optimization, analytics integration, and e-commerce solutions, we
              deliver scalable, secure digital platforms tailored to your unique
              needs.
            </p>
            <Link href="/" target="_blank">
              <SecondaryButton>Learn more</SecondaryButton>
            </Link>
          </div>

          {/* A photo of the team */}
          <div>
            <Image
              className="h-[881px] w-full object-cover"
              src="/images/Team.png"
              alt="JPStudio agency team of developers and designers"
              width={1000}
              height={881}
            />
          </div>
        </div>
      </section>

      <section className="py-30" id="process-section">
        <SectionHeading className="max-w-[46.625rem] pl-17">
          The comprehensive process for building your website
        </SectionHeading>

        {/* List of the process for building a website */}
        <div className="flex gap-11 overflow-x-auto px-14 pb-4 pl-17">
          {processes.map((process) => (
            <ProcessCard
              key={process.id}
              img={process.img}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
