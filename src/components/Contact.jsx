import React from "react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import InputField from "./InputField";
import SlideIn from "./SlideIn";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="flex-center w-full flex-col mb-10" id="contact">
      <SlideIn style={"w-full"}>
        <SectionTitle
          title={"Contact"}
          description={"Drop Us a Line and Let the Digital Adventure Begin!"}
          direction="row-reverse"
        />
      </SlideIn>
      <div className="w-full flex-center flex-col">
        <div className="flex-start flex-col gap-6 w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex-col flex-center"
          >
            <div className="w-full md:w-5/6 flex-start flex-col gap-8">
              <div className="max-w-sm mb-3"></div>
              <div className="flex flex-between flex-col md:flex-row w-full gap-5 md:gap-20">
                <SlideIn once={true} style={"w-full"}>
                  <InputField
                    required={true}
                    onChange={(e) => setFullname(e.target.value)}
                    id={"fullname"}
                  />
                </SlideIn>

                <SlideIn once={true} style={"w-full"} delay={0.2}>
                  <InputField
                    required={true}
                    onChange={(e) => setFullname(e.target.value)}
                    id={"company"}
                    label="Where You Make Magic"
                    placeholder="Company name"
                  />
                </SlideIn>
              </div>
              <div className="flex flex-between flex-col md:flex-row w-full gap-5 md:gap-20">
                <CustomSelect onChange={(e) => setBudget(e.target.value)} />

                <SlideIn once={true} style={"w-full"} delay={0.25}>
                  <InputField
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                    id={"email"}
                    label="Where We Reach Out to You"
                    placeholder="Email"
                    type="email"
                  />
                </SlideIn>
              </div>
              <SlideIn once={true} style={"w-full"} delay={0.3}>
                <InputField
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  id={"goal"}
                  label="What You're Dreaming Up*"
                  placeholder="Your Goal"
                />
              </SlideIn>

              <SlideIn once={true} style={"w-full"} delay={0.35}>
                <div className="relative flex w-full flex-lg">
                  <div className="flex justify-start flex-col gap-2 w-full">
                    <label
                      htmlFor={"details" + "_xboring_tech"}
                      className="font-monts text-base font-medium "
                    >
                      Share a Glimpse of Your Project
                      <span className="font-bold text-lg text-[#ff3333]">
                        *
                      </span>
                    </label>
                    <textarea
                      id={"details" + "_xboring_tech"}
                      type="text"
                      className="resize-y min-h-[10rem] rounded-2xl bg-white-trans border-white-trans font-rob font-normal p-3 md:p-4 w-full transition-all duration-300 text-dark-200 border-2 md:border-4 placeholder:text-dark-100 hover:border-dark-200 focus:border-dark-200 hover:bg-transparent focus:bg-transparent focus:outline-none"
                      placeholder={"Project details"}
                      onChange={(e) => setDetails(e)}
                      required={true}
                    />
                  </div>
                </div>
              </SlideIn>
            </div>
            <div className="w-full mt-20">
              <button
                type="submit"
                className="text-lg font-medium text-white-200 bg-gradient w-full p-6 text-center cursor-pointer rounded-full border-2 border-white-trans hover:border-white-100 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CustomSelect = ({ onChange }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor="details_xboring_tech"
        className="font-rob text-base font-medium"
      >
        What You're Willing to Splurge
        <span className="font-bold text-lg text-[#ff3333]">*</span>
      </label>
      <select
        id="details_xboring_tech"
        className="block w-full bg-white-trans border-white-trans rounded-full font-rob font-normal p-4 transition-all duration-300 text-dark-200 border-2 md:border-4 placeholder:text-dark-100 hover:border-dark-200 focus:border-dark-200 hover:bg-transparent focus:bg-transparent focus:outline-none"
        onChange={(e) => onChange(e)}
        required={true}
      >
        <option className="bg-white-trans text-[#999]">$800 - $3,000</option>
        <option className="bg-white-trans text-[#999]">$4,000 - $14,000</option>
        <option className="bg-white-trans text-[#999]">
          $20,000 - $50,000
        </option>
      </select>
    </div>
  );
};

export default Contact;
