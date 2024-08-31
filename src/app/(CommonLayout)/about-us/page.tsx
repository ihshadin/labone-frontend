import SectionHeader from "@/utils/SectionHeader";
import FAQSection from "@/components/Diagnostics/FAQSection";
import GallerySlider from "@/components/GallerySlider/GallerySlider";
import Breadcamp from "@/utils/Breadcamp";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import Newsletter from "@/components/Newsletter/Newsletter";
import TestimonialsSection from "@/components/Testimonial/TestimonialsSection";
import GoogleMaps from "@/components/GoogleMap/GoogleMaps";
import { getAboutsData } from "@/api/about.api";

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

const AboutUsPage = async () => {
  const aboutsData = await getAboutsData("66c9d4ff2b1c51fc3bd6abbc");
  return (
    <>
      <Breadcamp title={"About Us"} subTitle="About Labone" />
      <SpotlightSection data={spotlightData} />
      <AchivementSection />
      {aboutsData?.labPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="Our's Lab"
            heading="We have the most advance Lab"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.labPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.nicuPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="Nicu"
            heading="Neonatal intensive care unit (NICU)"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.nicuPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.otPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader subHeading="ot" heading="Operation theater" />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.otPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.emergencyUnitPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="Emergency Unit"
            heading="LabOne Hospital Emergency Unit is open 24/7"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.emergencyUnitPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.iTDeptPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="IT Department"
            heading="We have IT Department"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.iTDeptPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.pharmacyPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="Pharmacy Department"
            heading="LabOne Hospital Pharmacy Department"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.pharmacyPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.radiologyImagingPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="Radiology Imaging Department"
            heading="Radiology Imaging Department"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.radiologyImagingPhotos} />
          </div>
        </div>
      )}
      {aboutsData?.receptionPhotos?.length > 0 && (
        <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
          <SectionHeader
            subHeading="Reception"
            heading="LabOne Hospital Reception Department"
          />
          <div className="mt-6 md:mt-10">
            <GallerySlider photos={aboutsData?.receptionPhotos} />
          </div>
        </div>
      )}

      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
      <GoogleMaps />
    </>
  );
};

export default AboutUsPage;
