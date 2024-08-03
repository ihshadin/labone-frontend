"use client";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import faqImg from "@/assets/images/touch-illustration.png";

const FAQSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-14">
          <div>
            <Image
              removeWrapper
              className="w-full object-cover"
              src={faqImg.src}
              alt="FAQ Image"
            />
          </div>
          <div>
            <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
              FAQ
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p>We Answered some common questions that you might asked.</p>
            <div className="mt-7 md:mt-10">
              <Accordion
                defaultExpandedKeys={["theme"]}
                showDivider={false}
                itemClasses={{
                  base: "mb-3 shadow-[3px_4px_8px_inset] shadow-primary/10 hover:shadow-[3px_4px_8px] hover:shadow-primary/20 rounded-lg",
                  title: "shadin-tittle",
                  trigger: "px-4 bg-accent/5 rounded-lg",
                  indicator: "shadin-indicator",
                  content: "px-5 pt-3 pb-5",
                }}
              >
                <AccordionItem
                  key="theme"
                  aria-label="Theme"
                  title="How do we can set appointment?"
                >
                  You can Call on this Number and set your appontment
                  01913932777.
                </AccordionItem>
                <AccordionItem
                  key="anchor"
                  aria-label="Anchor"
                  title="How can we talk with a doctor."
                >
                  This is simple. You can directly come to Hospital and see ur
                  wished doctor or you can call on our hot number
                </AccordionItem>
                <AccordionItem
                  key="sun"
                  aria-label="Sun"
                  title="Where it is situated."
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
