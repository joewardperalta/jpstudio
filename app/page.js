"use client";

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
import { motion } from "framer-motion";

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
          <div className="mx-auto mb-[2.5rem] max-w-[81rem] tablet:mb-[3.7rem] laptop:mb-[3rem] desktop:my-[4.875rem]">
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
              className="rounded-xl tablet:rounded-5xl"
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
            key={service.id}
            className={bgColors[index]}
            title={service.title}
            description={service.description}
            img={service.img}
          />
        );
      })}

      {/* Projects Section */}
      <section id="projects-section">
        <Wrapper className="px-0">
          <div className="px-6 laptop:px-17">
            <SectionHeading>Featured Projects</SectionHeading>
          </div>

          {/* Project list */}
          <div className="space-x-11 overflow-x-auto whitespace-nowrap px-6 laptop:px-17">
            {projects.map((project) => (
              <ProjectCard
                className="inline-block"
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
        <Wrapper className="px-0">
          <div>
            <SectionHeading className="text-center">
              What People Are Saying
            </SectionHeading>

            {/* Testimonials */}
            <div className="space-x-11 overflow-x-auto whitespace-nowrap px-6 laptop:px-17">
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
        <div className="mx-auto flex flex-col-reverse gap-8 tablet:gap-20 laptop:flex-row laptop:items-center laptop:pl-[4.5rem] desktop:gap-[12.5rem]">
          {/* Brief description of the team */}
          <div className="w-full max-w-[42rem] px-6 pb-20 desktop:pb-0">
            <SectionHeading className="mb-8">
              Meet the team behind your success
            </SectionHeading>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="mb-10"
            >
              JPStudio creates modern, user-focused websites designed to drive
              business growth, enhance customer engagement, and boost
              conversions. With expertise in custom web design, SEO
              optimization, analytics integration, and e-commerce solutions, we
              deliver scalable, secure digital platforms tailored to your unique
              needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 0.8 },
              }}
              viewport={{ once: true }}
            >
              <Link href="/agency">
                <SecondaryButton>Learn more</SecondaryButton>
              </Link>
            </motion.div>
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
        <SectionHeading className="max-w-[51.125rem] px-6 laptop:px-17">
          The comprehensive process for building your website
        </SectionHeading>

        {/* List of the process for building a website */}
        <div className="space-x-11 overflow-x-auto whitespace-nowrap px-6 laptop:px-17">
          {processes.map((process) => (
            <ProcessCard
              className="inline-block"
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
                className=""
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
