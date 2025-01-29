import CheckBox from "@/components/buttons/CheckBox";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import RadioButton from "@/components/buttons/RadioButton";
import TextInput from "@/components/TextInput";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

export default function page() {
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
          <form className="space-y-[6.5rem]">
            {/* Services */}
            <div>
              <h3 className="mb-8 text-[2rem] font-medium">
                What services do you need?
              </h3>

              {/* Services options */}
              <div className="flex gap-6">
                <CheckBox id="web-design" name="services" value="Web Design" />
                <CheckBox
                  id="web-development"
                  name="services"
                  value="Web Development"
                />
                <CheckBox id="hosting" name="services" value="Hosting" />
              </div>
            </div>

            {/* Maintenance option */}
            <div>
              <h3 className="mb-8 text-[2rem] font-medium">
                Do you need maintenance support?
              </h3>

              {/* Services options */}
              <div className="flex gap-6">
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
              <div className="flex gap-6">
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
              <TextInput id="name" name="name" value="Your name" />
              <TextInput id="email" name="email" value="Email" />
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
              />
            </div>

            <PrimaryButton className="bg-black text-white">
              <input type="submit" value="Send" />
            </PrimaryButton>
          </form>
        </Wrapper>
      </section>
    </main>
  );
}
