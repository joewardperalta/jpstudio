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
import QuestionAndAnswerCard from "@/components/QuestionAndAnswerCard";
import CallToAction from "@/components/CallToAction";
import ServiceSection from "@/components/ServiceSection";

// JSON Data
import projects from "@/data/projects.json";
import testimonials from "@/data/testimonials.json";
import processes from "@/data/processes.json";
import faqs from "@/data/faqs.json";
import services from "@/data/services.json";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-black" id="hero-section">
        <Wrapper>
          <div className="laptop:mb-[3rem] mx-auto mb-[2.5rem] max-w-[81rem] tablet:mb-[3.7rem] desktop:my-[4.875rem]">
            <Title className="text-center text-white">
              We build modern and professional website for your business
            </Title>

            {/* CTA button */}
            <div className="mx-auto w-fit">
              <PrimaryButton className="bg-primary text-white">
                <Link href="/proposal">Get Started</Link>
              </PrimaryButton>
            </div>
          </div>
          <div>
            <Image
              className="rounded-2xl tablet:rounded-5xl"
              src="/images/comfort-sofa.jpg"
              width={3840}
              height={2160}
              alt="hero image of a sofa for a furniture E-commerce website"
              priority
            />
          </div>
        </Wrapper>
      </section>

      {/* Sections of services */}
      {services.map((service, index) => {
        // Background colors
        const bgColors = [
          "bg-white",
          "bg-lightBlue",
          "bg-white",
          "bg-lightPurple",
          "bg-white",
          "bg-lightYellow",
        ];

        return (
          <ServiceSection
            className={bgColors[index]}
            title={service.title}
            description={service.description}
            img={service.img}
          />
        );
      })}

      {/* Projects Section */}
      <section id="projects-section">
        <Wrapper>
          <div>
            <SectionHeading>Featured Projects</SectionHeading>
          </div>

          {/* Project list */}
          <div className="laptop:gap-14 flex flex-col gap-8 tablet:flex-row desktop:gap-20">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                img={{
                  src: project.coverImg.src,
                  alt: project.coverImg.alt,
                }}
                name={project.name}
                brief={project.brief}
                siteUrl={project.siteUrl}
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
            <div className="space-x-11 overflow-scroll whitespace-nowrap">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  className="inline-block"
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
            <Link href="/agency">
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
        <SectionHeading className="max-w-[51.125rem] pl-17">
          The comprehensive process for building your website
        </SectionHeading>

        {/* List of the process for building a website */}
        <div className="flex gap-11 overflow-x-auto px-17 pb-11">
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

      {/* CTA Section */}
      <CallToAction text="Are you ready to take the next step?" />

      {/* Frequently asked questions */}
      <section id="FAQ">
        <Wrapper>
          <SectionHeading className="text-center">
            Frequently asked questions
          </SectionHeading>

          {/* List of questions */}
          <div className="mx-auto max-w-[75rem]">
            {faqs.map((faq) => (
              <QuestionAndAnswerCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
