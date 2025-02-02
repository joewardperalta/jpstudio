"use client";
import Wrapper from "./Wrapper";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import CallToAction from "./CallToAction";

export default function ServicePage({
  title,
  subTitle,
  features = [],
  testimonials = [],
  cta,
}) {
  const [currentActiveFeature, setCurrentActiveFeature] = useState(features[0]);

  return (
    <main>
      {/* Hero section */}
      <section id="hero-section">
        <Wrapper>
          <Title className="text-center">{title}</Title>
          <SubTitle className="text-center">{subTitle}</SubTitle>
        </Wrapper>
      </section>

      {/* Features section */}
      <section className="bg-lightBlue">
        <div className="flex">
          <div className="flex w-full items-center">
            {/* Info */}
            <div className="w-full max-w-[50rem] px-28">
              {/* Feature title */}
              <SectionHeading className="mb-[2rem]">
                {currentActiveFeature.title}
              </SectionHeading>

              {/* Feature description */}
              <p className="mb-[3.75rem]">{currentActiveFeature.description}</p>

              {/* Left arrow button */}
              <div className="flex space-x-8">
                <button
                  onClick={() => {
                    if (currentActiveFeature.id === 0) {
                      // Set the current active features to the last element in the array
                      setCurrentActiveFeature(features[features.length - 1]);
                    } else {
                      // Set to the previous feature
                      setCurrentActiveFeature(
                        features[currentActiveFeature.id - 1],
                      );
                    }
                  }}
                >
                  <Image
                    src="/icons/left-arrow.png"
                    alt="left arrow icon"
                    width={23}
                    height={16}
                  />
                </button>

                {/* Right arrow button */}
                <button
                  onClick={() => {
                    if (currentActiveFeature.id === features.length - 1) {
                      // Set the current active features to the last element in the array
                      setCurrentActiveFeature(features[0]);
                    } else {
                      // Set to the previous feature
                      setCurrentActiveFeature(
                        features[currentActiveFeature.id + 1],
                      );
                    }
                  }}
                >
                  <Image
                    src="/icons/right-arrow.png"
                    alt="right arrow icon"
                    width={23}
                    height={16}
                  />
                </button>
              </div>
            </div>

            {/* Feature image */}
            <div className="h-[881px] w-full">
              <Image
                className="h-full w-full rounded-l-[2.25rem] object-cover object-left"
                src={currentActiveFeature.img.src}
                alt={currentActiveFeature.img.alt}
                width={2644}
                height={1762}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section>
        <Wrapper>
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
        </Wrapper>
      </section>

      {/* CTA section */}
      <CallToAction text={cta} />
    </main>
  );
}
