"use client";

import CheckBox from "@/components/buttons/CheckBox";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import RadioButton from "@/components/buttons/RadioButton";
import EmailInput from "@/components/EmailInput";
import TextInput from "@/components/TextInput";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Form from "next/form";
import { useState } from "react";

const sendingStates = {
  idle: 0,
  sending: 1,
  sent: 2,
  failed: 3,
};

export default function Page() {
  // State for email status
  const [sendingStatus, setSendingStatus] = useState(sendingStates.idle);

  // States for the form inputs
  const [formName, setFormName] = useState();
  const [formEmail, setFormEmail] = useState();
  const [formMessage, setFormMessage] = useState();

  // Handle sending the email
  async function sendEmail(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Send the form data to the body of the sendEmail api
    const response = await fetch("/api/sendemail", {
      method: "POST",
      body: formData,
    });

    // Handle response
    const res = response.json();

    res
      .then(() => {
        // set the email status to sent
        setSendingStatus(sendingStates.sent);
      })
      .catch((err) => {
        // show that the email was unsuccessful
        setSendingStatus(sendingStates.failed);
      });

    // Notify that the email was successfuly sent
    //res.then((data) => alert(data.message));
  }

  // Track the status of an email when form is submitted, then display
  // the appropriate message
  function handleSendingStatus() {
    if (sendingStatus == sendingStates.sending) {
      return "Sending";
    } else if (sendingStatus == sendingStates.sent) {
      return "Sent";
    } else if (sendingStatus == sendingStates.failed) {
      return "Try Again";
    } else {
      return "Send";
    }
  }

  return (
    <main>
      {/* Hero section */}
      <section>
        <Wrapper>
          <Title>Tell us what you need...</Title>
        </Wrapper>
      </section>

      {/* Form */}
      <section>
        <Wrapper className="py-0">
          <Form
            onSubmit={sendEmail}
            formMethod="POST"
            className="space-y-[6.5rem]"
          >
            {/* Services */}
            <div>
              <h3 className="mb-8 text-[2rem] font-medium">
                What services do you need?
              </h3>

              {/* Services options */}
              <div className="flex flex-wrap gap-6">
                <CheckBox
                  id="web-design"
                  name="web-design"
                  value="Web Design"
                />
                <CheckBox
                  id="web-development"
                  name="web-development"
                  value="Web Development"
                />
                <CheckBox
                  id="domain-and-hosting-setup"
                  name="domain-and-hosting-setup"
                  value="Domain & Hosting Setup"
                />
                <CheckBox
                  id="analytics-integration"
                  name="analytics-integration"
                  value="Analytics Integration"
                />
                <CheckBox
                  id="ecommerce-integration"
                  name="ecommerce-integration"
                  value="E-commerce Integration"
                />
              </div>
            </div>

            {/* Maintenance option */}
            <div>
              <h3 className="mb-8 text-[2rem] font-medium">
                Do you need maintenance support?
              </h3>

              {/* Services options */}
              <div className="flex flex-wrap gap-6">
                <RadioButton id="yes" name="maintenance-support" value="yes" />
                <RadioButton id="no" name="maintenance-support" value="no" />
              </div>
            </div>

            {/* Project budget */}
            <div>
              <h3 className="mb-8 text-[2rem] font-medium">
                Project budget (CAD)
              </h3>

              {/* Budget options */}
              <div className="flex flex-wrap gap-6">
                <RadioButton
                  id="100-300"
                  name="budget-option"
                  value="100-300"
                />
                <RadioButton
                  id="300-500"
                  name="budget-option"
                  value="300-500"
                />
                <RadioButton
                  id="500-1000"
                  name="budget-option"
                  value="500-1000"
                />
                <RadioButton id="1000+" name="budget-option" value="1000+" />
              </div>
            </div>

            {/* Customer information */}
            <div className="space-y-16">
              <TextInput
                id="name"
                name="name"
                value="Your name"
                required={true}
                onChange={(e) => setFormName(e.target.value)}
              />
              <EmailInput
                id="email"
                name="email"
                value="Email"
                required={true}
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </div>

            {/* Message box */}
            <div>
              <label
                className="mb-4 block text-[2rem] font-medium"
                htmlFor="email-message"
              >
                Tell us about your project
              </label>
              <textarea
                className="borrder-black h-[315px] w-full border-b text-2xl focus-visible:outline-none"
                id="email-message"
                name="email-message"
                required
                onChange={(e) => setFormMessage(e.target.value)}
              />
            </div>

            <PrimaryButton
              className="flex items-center bg-black text-white"
              type="submit"
              onClick={() => {
                if (formName && formEmail && formMessage) {
                  setSendingStatus(sendingStates.sending);
                }
              }}
            >
              {/* Render loading image */}
              {sendingStatus == sendingStates.sending && (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="mr-4 animate-spin"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    strokeWidth="4"
                    strokeOpacity="0.2"
                  />
                  <path d="M38 20a18 18 0 0 1-18 18" strokeWidth="4" />
                </svg>
              )}

              {handleSendingStatus()}

              {sendingStatus == sendingStates.sent && (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </PrimaryButton>
            <span className="inline-block pl-4"></span>
          </Form>
        </Wrapper>
      </section>
    </main>
  );
}
