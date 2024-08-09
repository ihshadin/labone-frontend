import SectionHeader from "@/utils/SectionHeader";
import FAQSection from "@/components/Diagnostics/FAQSection";
import GallerySlider from "@/components/GallerySlider/GallerySlider";
import Breadcamp from "@/utils/Breadcamp";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import Newsletter from "@/components/Newsletter/Newsletter";
import TestimonialsSection from "@/components/Testimonial/TestimonialsSection";

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
      <SpotlightSection data={spotlightData} />
      <AchivementSection />
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Our's Lab"
          heading="We have the most advance Lab"
        />
        <div className="mt-6 md:mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Nicu"
          heading="Neonatal intensive care unit (NICU)"
        />
        <div className="mt-6 md:mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader subHeading="ot" heading="Operation theater" />
        <div className="mt-6 md:mt-10">
          <GallerySlider photos={labPhotos} />
        </div>
      </div>
      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default AboutUsPage;
