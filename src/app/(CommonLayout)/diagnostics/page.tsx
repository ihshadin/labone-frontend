import { TMachine } from "@/types/machine.type";
import LabBtn from "@/utils/LabBtn";
import SectionHeader from "@/utils/SectionHeader";
import MachineCard from "@/components/Machines/MachineCard";
import DoctorsSection from "@/components/Diagnostics/DoctorsSection";
import FAQSection from "@/components/Diagnostics/FAQSection";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import SpecialService from "@/components/SpecialService/SpecialService";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import Newsletter from "@/components/Newsletter/Newsletter";
import TestimonialsSection from "@/components/Testimonial/TestimonialsSection";
import { getDgDoctors } from "@/api/dg-doctors.api";
import { getDgMachines } from "@/api/dg-machines.api";

const spotlightData = {
  image:
    "https://res.cloudinary.com/dz4ckryd6/image/upload/v1725081332/qqbj3dzdof0nivqa0kcn.jpg",
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

const DiagnosticsPage = async () => {
  const machines = await getDgMachines([{ name: "limit", value: 9 }]);
  const doctors = await getDgDoctors([{ name: "limit", value: 9 }]);

  // console.log("doctors--=?..=>", doctors);

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
          {machines?.result?.map((machine: TMachine) => (
            <MachineCard
              linkMachine="diagnostics/machines"
              key={machine?._id}
              machine={machine}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <LabBtn text="See All Machines" link="/diagnostics/machines" />
        </div>
      </div>
      <DoctorsSection isFromHome={false} doctors={doctors?.result} />
      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default DiagnosticsPage;
