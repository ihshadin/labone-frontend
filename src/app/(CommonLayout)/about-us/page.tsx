import SectionHeader from "@/utils/SectionHeader";
import FAQSection from "@/components/Diagnostics/FAQSection";
import GallerySlider from "@/components/GallerySlider/GallerySlider";
import Breadcamp from "@/utils/Breadcamp";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";
import AchivementSection from "@/components/AchivementSection/AchivementSection";
import Newsletter from "@/components/Newsletter/Newsletter";
import TestimonialsSection from "@/components/Testimonial/TestimonialsSection";
import GoogleMaps from "@/components/GoogleMap/GoogleMaps";

const labPhotos = [
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/ikhhdwweb0gpcjur4gay.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/fhnlwtdpqylfap1qysjw.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/q4mwpeacnlia9mntigi0.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/mmf4ne1q4mrqgtsbrfnw.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/rlau2jdweuu7xls2wimj.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/exrwmbibgk1jv3rrvjpz.jpg",
];

const nicuPhotos = [
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/djlnugyrujoqaql1ydd3.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/irqmqrp0rp0czlhuwedt.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/dmii1zfp7w70df53lqpy.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/ituatglb06vw310mqb0t.jpg",
];
const otPhotos = [
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/fgdai1wdrcbpovgvpwcg.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/pai2mml2zidszdtnifxn.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/iaivi9hbu54rgzngjwiv.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/dfe8pyhxvltktl32jxrc.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/zhcxxxzsvyn2ectmbgii.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/i2tpmdkztmxutms8qbhx.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/ris4yyobboc8mcvvvvwu.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/nunykhki2jrhgnvkimgv.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/pyx7zbuqjkqk2faxvpho.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/nztgpugccz9a4ivsxm1o.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/sqkohbvyhj28bjbbulap.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806686/theater/t2opmxczciafft3whasr.jpg",
];

const emPhoto = [
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1724335575/Labone-about/t3szcrldkgejbovlxtyi.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1724335673/xcksptacpzihzwn6v0yi.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1724335672/qgi79pa8c11hdebtkfo4.avif",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1724335672/g8ybk8nikk4fwqchlufi.jpg",
  "https://res.cloudinary.com/dz4ckryd6/image/upload/v1724335671/rawvkfumktqjgll9lqpp.jpg",
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
          <GallerySlider photos={nicuPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader subHeading="ot" heading="Operation theater" />
        <div className="mt-6 md:mt-10">
          <GallerySlider photos={otPhotos} />
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-20">
        <SectionHeader
          subHeading="Emergency Unit"
          heading="LabOne Hospital Emergency Unit is open 24/7"
        />
        <div className="mt-6 md:mt-10">
          <GallerySlider photos={emPhoto} />
        </div>
      </div>
      <Newsletter />
      <TestimonialsSection />
      <FAQSection />
      <GoogleMaps />
    </>
  );
};

export default AboutUsPage;
