import LabBtn from "@/utils/LabBtn";
import SectionHeader from "@/utils/SectionHeader";
import { Image, Input } from "@nextui-org/react";
import { RiArrowDropRightLine } from "react-icons/ri";
import serviceLine from "@/assets/images/sr-line.png";
import MachineCard from "@/components/Machines/MachineCard";
import DoctorsSection from "@/components/Diagnostics/DoctorsSection";
import bgImg from "@/assets/images/an-bg.png";
import TestimonialsSection from "@/components/Diagnostics/TestimonialsSection";
import FAQSection from "@/components/Diagnostics/FAQSection";

const machineData = [
  {
    _id: "64b4da56b07a982d6c8d5aef7",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1214%20(1).jpg",
    name: "Bone Densitometer Model B100",
    slug: "Bone-Densitometer-Model-B100",
    country: "UK",
    details:
      "The Bone Densitometer Model B100 from the UK is designed to measure bone density with high accuracy. It provides vital information for diagnosing and monitoring osteoporosis.Features High-precision measurements Low radiation dose Easy-to-use interface Fast scan timesApplicationsThis machine is widely used in diagnosing osteoporosis and other bone-related conditions, offering accurate measurements to guide treatment.SpecificationsResolution:  1800 x 1800 pixels Power Supply:  220V, 50Hz Weight:  150 kg Dimensions:  120 cm x 80 cm x 140 cmWarrantyThe Bone Densitometer Model B100 comes with a 5-year warranty for reliable support.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef8",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1212%20(1).jpg",
    name: "ECG Machine Model E500",
    slug: "ECG-Machine-Model-E500",
    country: "China",
    details:
      "The ECG Machine Model E500, developed in China, offers precise and reliable electrocardiogram readings. It is designed for accurate monitoring of heart activity.Features High-resolution display Portable design Wireless connectivity Easy-to-use interfaceApplicationsIdeal for cardiology departments, this machine provides accurate ECG readings to help diagnose and monitor heart conditions.SpecificationsResolution:  1280 x 720 pixels Power Supply:  220V, 50Hz Weight:  20 kg Dimensions:  40 cm x 30 cm x 20 cmWarrantyThe ECG Machine Model E500 includes a 4-year warranty for comprehensive support.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef10",
    photo: "https://labonehospital.com/admin/machineimage/machine1.jpg",
    name: "Ventilator Model V800",
    slug: "Ventilator-Model-V800",
    country: "India",
    details:
      "The Ventilator Model V800, manufactured in India, provides advanced respiratory support for critical care. It is equipped with the latest technology for optimal patient ventilation.Features Advanced ventilation modes High-resolution touch screen Real-time monitoring Portable and compact designApplicationsSuitable for use in ICU, emergency, and transport settings, this ventilator ensures reliable and effective respiratory support for patients in critical condition.SpecificationsResolution:  1024 x 768 pixels Power Supply:  220V, 50Hz Weight:  60 kg Dimensions:  70 cm x 50 cm x 100 cmWarrantyThe Ventilator Model V800 comes with a 5-year warranty for assured performance and support.",
  },
];

const DiagnosticsPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
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
            <h2 className="text-3xl lg:text-5xl font-bold mt-1.5 md:mt-3 mb-3 lg:mb-7">
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
      </div>
      <SectionHeader
        subHeading="our services"
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
          {machineData.map((machine) => (
            <MachineCard key={machine._id} machine={machine} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <LabBtn text="See All" link="/machines" />
        </div>
      </div>
      <DoctorsSection />
      <div
        className={`bg-no-repeat bg-[center_bottom] md:bg-cover -z-10`}
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="mx-auto max-w-[1250px] px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mt-10 md:mt-44">
              <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
                NEWSLETTER
              </h6>
              <h2 className="text-4xl md:text-5xl font-bold mt-1.4 md:mt-3 mb-3 md:mb-7">
                Subscribe To Our <br /> Newsletter
              </h2>
              <div className="flex items-center w-full max-w-96 bg-white rounded-full">
                <Input
                  type="text"
                  placeholder="Email Address"
                  classNames={{
                    label:
                      "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
                    inputWrapper: [
                      "border-none",
                      "rounded-full",
                      "bg-white",
                      "h-[50px]",
                      "px-6",
                      "group-data-[hover=true]:bg-white",
                      "group-data-[focus=true]:bg-white",
                      "group-data-[focus=true]:border-primary/50",
                    ],
                  }}
                />
                <LabBtn text="Subscribe" link="/about-us" />
              </div>
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

export default DiagnosticsPage;
