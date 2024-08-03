import { baseApi } from "@/utils/baseUrl";
import { TMachine } from "@/types/machine.type";
import HeroSection from "@/components/HomePage/HeroSection";
import Schedules from "@/components/HomePage/Schedules";
import LabBtn from "@/utils/LabBtn";
import LiveTimer from "@/utils/LiveTimer";
import SectionHeader from "@/utils/SectionHeader";
import AppointmentForm from "@/components/Appointment/AppointmentForm";
import DoctorsSection from "@/components/Diagnostics/DoctorsSection";
import FAQSection from "@/components/Diagnostics/FAQSection";
import MachineCard from "@/components/Machines/MachineCard";
import Newsletter from "@/components/Newsletter/Newsletter";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import SpecialService from "@/components/SpecialService/SpecialService";
import TestimonialsSection from "@/components/Diagnostics/TestimonialsSection";

const spotlightData = {
  image: "https://labonehospital.com/img/bg/illlustration.jpg",
  subHeading: "About Us",
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

export default async function Home() {
  const data = await getDoctorData();
  const machineData = await getMachineData();

  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-[1250px] px-2 py-10 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 my-10 rounded-xl">
            <div className=" text-center">
              <h2 className="text-primary text-2xl font-semibold">
                Appointment Form
              </h2>
              <p className="text-sm font-medium font-tiroBangla mt-2">
                ফর্ম পূরনে সমস্যা হলে আপনি সরাসরি কল দিয়েও আপনার এপোয়েন্টমেন্ট
                বুক করতে পারবেন
              </p>
            </div>
            <div className="mt-4 md:mt-5">
              <AppointmentForm />
            </div>
          </div>
          <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 my-10 rounded-xl">
            <div className="flex items-center justify-between mb-8 ">
              <h2 className="text-primary text-2xl font-semibold">
                Today&apos;s schedule
              </h2>
              {/* <LiveTimer /> */}
            </div>
            <div className="mt-4 md:mt-5">
              <Schedules />
            </div>
          </div>
        </div>
      </div>
      <SpotlightSection data={spotlightData} />
      <SectionHeader
        subHeading="Our Services"
        heading="Our Special Services For You"
        desc="One of the essential qualities of the clinician is interest in humanity, for the secret of the care of the patient is in caring for the patient."
      />
      <SpecialService />
      <AchivementSection />
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="OUR LATEST Instruments"
          heading="We Use Modern Machines"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-8 md:py-12">
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
}
