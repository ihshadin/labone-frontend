import LabBtn from "@/utils/LabBtn";
import SectionHeader from "@/utils/SectionHeader";
import { Image } from "@nextui-org/react";
import { RiArrowDropRightLine } from "react-icons/ri";
import serviceLine from "@/assets/images/sr-line.png";
import MachineCard from "@/components/Machines/MachineCard";
import DoctorsSection from "@/components/Diagnostics/DoctorsSection";
import bgImg from "@/assets/images/an-bg.png";
import TestimonialsSection from "@/components/Diagnostics/TestimonialsSection";
import FAQSection from "@/components/Diagnostics/FAQSection";
import GallerySlider from "@/components/GallerySlider/GallerySlider";

const labPhotos = [
  "https://labonehospital.com/admin/doctorimg/9%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/10%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/11%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/1%20lab.jpg",
  "https://labonehospital.com/admin/doctorimg/2%20lab.jpg",
];

const AboutUsPage = () => {
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
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Our's Lab"
          heading="We have the most advance Lab"
        />
        <div className="mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Nicu"
          heading="Neonatal intensive care unit (NICU)"
        />
        <div className="mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader subHeading="ot" heading="Operation theater" />
        <div className="mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div
        className={`bg-no-repeat bg-[center_bottom] bg-cover -z-10`}
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="mx-auto max-w-[1250px] px-2">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="mt-44">
              <h6 className="font-medium uppercase text-primary tracking-[2px] py-2.5 px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-0 hover:before:w-full before:duration-300">
                NEWSLETTER
              </h6>
              <h2 className="text-5xl font-bold mt-3 mb-7">
                Subscribe To Our <br /> Newsletter
              </h2>
            </div>
            <div>
              <Image
                removeWrapper
                className="w-[330px] ml-auto object-cover rounded-none"
                src={"https://labonehospital.com/img/bg/news-illustration.png"}
                alt="Services image"
              />
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default AboutUsPage;
