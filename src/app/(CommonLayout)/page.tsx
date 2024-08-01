import { Image } from "@nextui-org/react";
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
import TestimonialsSection from "@/components/Diagnostics/TestimonialsSection";
import MachineCard from "@/components/Machines/MachineCard";
import serviceLine from "@/assets/images/sr-line.png";
import Newsletter from "@/components/Newsletter/Newsletter";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";

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
      <HeroSection/>
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
              <LiveTimer/>
            </div>
            <div className="mt-4 md:mt-5">
              <Schedules/>
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
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-16">
        <div
          className="grid md:grid-cols-3 gap-8 md:gap-16 bg-no-repeat bg-[center_top_30px]"
          style={{ backgroundImage: `url(${serviceLine.src})` }}
        >
          <div>
            <div className="flex items-center justify-center mx-auto w-[120px] h-[120px] bg-white shadow-[3px_4px_15px] shadow-primary/15 rounded-full p-2.5 text-center">
              <Image
                removeWrapper
                className="w-12 object-cover rounded-none"
                src={"https://labonehospital.com/img/icon/sr-icon01.png"}
                alt="Services image"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-center mb-1">
                24/7 Ambulance
              </h5>
              <p className="text-center">
                We provide 24 hours Ambulance anywhere in all over the country.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center mx-auto w-[120px] h-[120px] bg-white shadow-[3px_4px_15px] shadow-primary/15 rounded-full p-2.5 text-center">
              <Image
                removeWrapper
                className="w-12 object-cover rounded-none"
                src={"https://labonehospital.com/img/icon/sr-icon02.png"}
                alt="Services image"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-center mb-1">
                Medication Service
              </h5>
              <p className="text-center">
                We have the largest collection of medicines in our own pharmacy.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mx-auto w-[120px] h-[120px] bg-white shadow-[3px_4px_15px] shadow-primary/15 rounded-full p-2.5 text-center">
              <Image
                removeWrapper
                className="w-12 object-cover rounded-none"
                src={"https://labonehospital.com/img/icon/sr-icon03.png"}
                alt="Services image"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-center mb-1">
                24/7 Emergency Depertment
              </h5>
              <p className="text-center">
                Our Doctors are avaibale in our emergency depertment for 24
                hours.
              </p>
            </div>
          </div>
        </div>
      </div>
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
          subHeading="OUR LATEST Instruments"
          heading="We use modern machines"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-8 md:py-12">
          {machineData?.data?.result?.map((machine: TMachine) => (
            <MachineCard key={machine._id} machine={machine} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <LabBtn text="See All" link="/machines" />
        </div>
      </div>
      <DoctorsSection doctors={data?.data?.result} />
      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
