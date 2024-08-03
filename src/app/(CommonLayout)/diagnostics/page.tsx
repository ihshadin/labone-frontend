import { baseApi } from "@/api/api";
import { TMachine } from "@/types/machine.type";
import { Image } from "@nextui-org/react";
import { RiArrowDropRightLine } from "react-icons/ri";
import LabBtn from "@/utils/LabBtn";
import SectionHeader from "@/utils/SectionHeader";
import serviceLine from "@/assets/images/sr-line.png";
import MachineCard from "@/components/Machines/MachineCard";
import DoctorsSection from "@/components/Diagnostics/DoctorsSection";
import bgImg from "@/assets/images/an-bg.png";
import TestimonialsSection from "@/components/Diagnostics/TestimonialsSection";
import FAQSection from "@/components/Diagnostics/FAQSection";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import SpecialService from "@/components/SpecialService/SpecialService";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import Newsletter from "@/components/Newsletter/Newsletter";

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

const getDoctorData = async () => {
  const res = await fetch(`${baseApi}/doctor?limit=7`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const getMachineData = async () => {
  const res = await fetch(`${baseApi}/machine?limit=3`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const DiagnosticsPage = async () => {
  const data = await getDoctorData();
  const machineData = await getMachineData();

  return (
    <>
      <SpotlightSection data={spotlightData} />
      <SectionHeader
        subHeading="our services"
        heading="Our Special Services For You"
        desc="One of the essential qualities of the clinician is interest in humanity, for the secret of the care of the patient is in caring for the patient."
      />
      <SpecialService />
      <AchivementSection />
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="OUR LATEST Instruments"
          heading="We use modern machines"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-6 md:pt-10 pb-8 md:pb-12">
          {machineData?.data?.result?.map((machine: TMachine) => (
            <MachineCard key={machine._id} machine={machine} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <LabBtn text="See All Machines" link="/machines" />
        </div>
      </div>
      <DoctorsSection doctors={data?.data?.result} />
      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default DiagnosticsPage;
