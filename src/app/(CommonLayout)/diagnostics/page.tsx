import LabBtn from "@/utils/LabBtn";
import { Image } from "@nextui-org/react";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const DiagnosticsPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-14">
          <div>
            <Image
              removeWrapper
              className="w-full object-cover"
              src={"https://labonehospital.com/img/bg/illlustration.jpg"}
              alt="Services image"
            />
          </div>
          <div>
            <h6 className="font-medium uppercase text-primary tracking-[2px] py-2.5 px-5 inline-block transition-all cursor-w-resize relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
              About Labone Diagnositc
            </h6>
            <h2 className="text-5xl font-bold mt-3 mb-7">
              We Are Specialize in Medical Diagnositics
            </h2>
            <p>
              At our Lab One Hospital, we are dedicated to providing exceptional
              care and comfort to every patient. Our highly skilled and
              compassionate team of healthcare professionals is committed to
              delivering personalized, patient-centered experiences. With
              cutting-edge technology and a patient-first approach, we strive to
              be the premier choice for all of your healthcare needs.
            </p>
            <ul className="mt-2 md:mt-5 mb-8 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
              <li>
                <RiArrowDropRightLine />
                <span>We are dedicated to the commitment of patient.</span>
              </li>
              <li>
                <RiArrowDropRightLine />
                <span>
                  Our Doctors are very much professional on their job..
                </span>
              </li>
              <li>
                <RiArrowDropRightLine />
                <span>We have 24/7 emergency service.</span>
              </li>
            </ul>
            <LabBtn text="Read More" link="/about-us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosticsPage;
