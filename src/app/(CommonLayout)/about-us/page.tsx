import LabBtn from "@/utils/LabBtn";
import SectionHeader from "@/utils/SectionHeader";
import { Image, Input } from "@nextui-org/react";
import { RiArrowDropRightLine } from "react-icons/ri";
import TestimonialsSection from "@/components/Diagnostics/TestimonialsSection";
import GallerySlider from "@/components/GallerySlider/GallerySlider";
import Breadcamp from "@/utils/Breadcamp";
import Newsletter from "@/components/Newsletter/Newsletter";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";

const labPhotos = [
  "https://labonehospital.com/admin/doctorimg/9%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/10%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/11%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/1%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/2%20lab.jpg",
];

const spotlightData = {
  image: "https://labonehospital.com/img/bg/illlustration.jpg",
  subHeading: "About Labone Diagnositc",
  heading: "We Are Specialize in Medical Diagnositics",
  description:
    "At our Lab One Hospital, we are dedicated to providing exceptional care and comfort to every patient. Our highly skilled and compassionate team of healthcare professionals is committed to delivering personalized, patient-centered experiences. With cutting-edge technology and a patient-first approach, we strive to be the premier choice for all of your healthcare needs.",
  featureList: [
    "We are dedicated to the commitment of patient.",
    "Our Doctors are very much professional on their job.",
    "We have 24/7 emergency service.",
  ],
  btnText: "Read More",
  btnLink: "/about-us",
};

const AboutUsPage = () => {
  return (
    <>
      <Breadcamp title={"About Us"} subTitle="About Labone" />
      {/* <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-14">
          <div>
            <Image
              removeWrapper
              className="w-full object-cover"
              src={"https://labonehospital.com/img/bg/illlustration.jpg"}
              alt="Services image"
            />
          </div>
          <div>
            <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
              About Labone Diagnositc
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-1.5 md:mt-3 mb-3 lg:mb-7">
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
            <div className="flex justify-center md:justify-start">
              <LabBtn text="Read More" link="/about-us" />
            </div>
          </div>
        </div>
      </div> */}
      <SpotlightSection data={spotlightData} />
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-8 bg-white shadow-[3px_4px_8px] shadow-primary/10 hover:shadow-[3px_4px_8px_inset] hover:shadow-primary/20 rounded-xl">
            <Image
              removeWrapper
              className="w-12 mx-auto object-cover rounded-none"
              src={"https://labonehospital.com/img/icon/cunt-icon01.png"}
              alt="Services image"
            />
            <h5 className="text-4xl font-bold text-primary text-center mt-2 mb-0.5">
              90+
            </h5>
            <p className="text-center">Doctors At Work</p>
          </div>
          <div className="p-8 bg-white shadow-[3px_4px_8px] shadow-primary/10 hover:shadow-[3px_4px_8px_inset] hover:shadow-primary/20 rounded-xl">
            <Image
              removeWrapper
              className="w-12 mx-auto object-cover rounded-none"
              src={"https://labonehospital.com/img/icon/cunt-icon02.png"}
              alt="Services image"
            />
            <h5 className="text-4xl font-bold text-primary text-center mt-2 mb-0.5">
              230000+
            </h5>
            <p className="text-center">Happy Patients</p>
          </div>
          <div className="p-8 bg-white shadow-[3px_4px_8px] shadow-primary/10 hover:shadow-[3px_4px_8px_inset] hover:shadow-primary/20 rounded-xl">
            <Image
              removeWrapper
              className="w-12 mx-auto object-cover rounded-none"
              src={"https://labonehospital.com/img/icon/cunt-icon03.png"}
              alt="Services image"
            />
            <h5 className="text-4xl font-bold text-primary text-center mt-2 mb-0.5">
              50+
            </h5>
            <p className="text-center">Medical Beds</p>
          </div>
          <div className="p-8 bg-white shadow-[3px_4px_8px] shadow-primary/10 hover:shadow-[3px_4px_8px_inset] hover:shadow-primary/20 rounded-xl">
            <Image
              removeWrapper
              className="w-12 mx-auto object-cover rounded-none"
              src={"https://labonehospital.com/img/icon/cunt-icon03.png"}
              alt="Services image"
            />
            <h5 className="text-4xl font-bold text-primary text-center mt-2 mb-0.5">
              22+
            </h5>
            <p className="text-center">Cabin</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Our's Lab"
          heading="We have the most advance Lab"
        />
        <div className="mt-5 md:mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Nicu"
          heading="Neonatal intensive care unit (NICU)"
        />
        <div className="mt-5 md:mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader subHeading="ot" heading="Operation theater" />
        <div className="mt-5 md:mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <Newsletter />
      <TestimonialsSection />
    </>
  );
};

export default AboutUsPage;
