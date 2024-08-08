import { TMachine } from "@/types/machine.type";
import HeroSection from "@/components/HomePage/HeroSection";
import LabBtn from "@/utils/LabBtn";
import SectionHeader from "@/utils/SectionHeader";
import AppointmentForm from "@/components/Appointment/AppointmentForm";
import DoctorsSection from "@/components/Diagnostics/DoctorsSection";
import FAQSection from "@/components/Diagnostics/FAQSection";
import MachineCard from "@/components/Machines/MachineCard";
import Newsletter from "@/components/Newsletter/Newsletter";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import SpecialService from "@/components/SpecialService/SpecialService";
import TestimonialsSection from "@/components/Testimonial/TestimonialsSection";
import heartbit from "@/assets/images/graph-img.png"
import SchedulesContainer from "@/components/HomePage/SchedulesContainer";
import { getMachines } from "@/api/machines.api";
import { getDoctors } from "@/api/doctors.api";
import LiveTimer from "@/utils/LiveTimer";
import { Image } from "@nextui-org/react";

const spotlightData = {
  image: "https://labonehospital.com/img/bg/illlustration.jpg",
  subHeading: "About Us",
  heading: "We Are Specialize in Medical Diagnostics",
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

export default async function Home() {
  const machines = await getMachines(3);
  const doctors = await getDoctors(10);

  return (
    <>
      <HeroSection />
      <div className="flex flex-col justify-center items-center py-8 md:py-12 relative" >
        <Image
        className="absolute -top-10 left-0 w-full max-w-full -z-10 !opacity-15"
        src={heartbit.src}
        removeWrapper
        alt="labone"
        />
      {/* style={{backgroundImage:`url(${heartbit.src})`}} */}

        <LiveTimer />
      </div>
      <div className="mx-auto max-w-[1250px] px-2 pb-10 md:pb-16 lg:pb-20">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 rounded-xl">
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
          <SchedulesContainer />
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
          {machines?.map((machine: TMachine) => (
            <MachineCard key={machine._id} machine={machine} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <LabBtn text="See All Machines" link="/machines" />
        </div>
      </div>
      <DoctorsSection doctors={doctors} />
      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
