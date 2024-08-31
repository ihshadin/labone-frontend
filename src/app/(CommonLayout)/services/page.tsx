import React from "react";
import Breadcamp from "@/utils/Breadcamp";
import { RiArrowDropRightLine } from "react-icons/ri";
import SpotlightSection from "@/components/SpotlightSection/SpotlightSection";

const services = {
  serviceTitle: "আমাদের সার্ভিসসমূহ",
  serviceExerpt:
    "আমাদের ল্যাব ওয়ান হাসপাতালে, আমরা প্রত্যেক রোগীকে ব্যতিক্রমী যত্ন এবং আরাম দেওয়ার জন্য নিবেদিত। আমাদের স্বাস্থ্যসেবা পেশাদারদের অত্যন্ত দক্ষ এবং সহানুভূতিশীল দল ব্যক্তিগতকৃত, রোগী-কেন্দ্রিক অভিজ্ঞতা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ।",
  serviceItems: [
    "সর্বাক্ষনিক আউটডোর ও ইন্ডঅরের চিকিৎসা ব্যবস্থা",
    "সর্বাধুনিক প্রযুক্তিতে সকল ধরনের অপারেশন ব্যবস্থা",
    "নবজাতক বাচ্চাদের চিকিৎসার ব্যবস্থা",
    "নরমাল ডেলিভারী সু-ব্যবস্থা",
    "ডি এন্ড সি সু-ব্যবস্থা",
    "সেন্ট্রাল অক্সিজেন ও সেন্টার এসির ব্যবস্থা",
    "প্যাথলজী ফুল কমপ্লিট অটোমেশন",
    "হরমন টেস্ট",
    "ইলেকট্রোলাইট",
    "ইউরোফ্লোরোমেট্রি",
    "স্পাইরোমেট্রি",
    "মাল্টিস্পাইস সিটি স্ক্যান",
    "হেয়ারিং টেস্ট",
    "ডিজিটাল ও পি.জি.",
    "ডিজিটাল এক্স-রে",
    "ডিজিটাল ই.সি.জি. ১২ চ্যানেল",
    "ইকোকার্ডিওগ্রাম 2D",
    "ইকোকার্ডিওগ্রাম কালার ডপলার",
    "ভিডিও এন্ডোসকপি এন্ড কোলনোস্কোপি",
    "4D ডিজিটাল আল্ট্রাসনোগ্রাম ও কালার ডপলার",
    "মেডিকেল চেকাপ",
    "প্রতিদিন বিশেষজ্ঞ ডাক্টার চেম্বার",
    "সার্বক্ষনিক এম্বুলেন্স ব্যবস্থা",
  ],
};
const spotlightData = {
  image:
    "https://res.cloudinary.com/dz4ckryd6/image/upload/v1725081332/qqbj3dzdof0nivqa0kcn.jpg",
  subHeading: "Doctors",
  heading: "Expert Care from Dedicated Professionals",
  description:
    "At Lab One Hospital, our team of highly qualified doctors is at the heart of our commitment to patient care. With diverse specialties and a shared dedication to excellence, our doctors provide personalized treatment plans, ensuring the best possible outcomes for every patient.",
  featureList: [
    "Board-certified specialists with extensive experience.",
    "Personalized care tailored to each patient’s needs.",
    "We have 24/7 emergency service.",
  ],
};
const spotlightData2 = {
  image:
    "https://res.cloudinary.com/dz4ckryd6/image/upload/v1725012025/ijo3jg4mzgd7qx5uswfw.jpg",
  subHeading: "Machines",
  heading: "Advanced Medical Equipment for Diagnoses",
  description:
    "At Lab One Hospital, we take pride in our state-of-the-art diagnostic machines, ensuring accuracy and reliability in every diagnosis. Our advanced technology empowers our medical team to deliver precise and timely results, enhancing patient care and outcomes.",
  featureList: [
    "High-resolution imaging for detailed analysis.",
    "Fully automated systems for seamless and efficient diagnostics.",
    "Real-time data integration for immediate clinical insights.",
    "Cutting-edge laboratory equipment for swift and accurate test results.",
  ],
};

const ServicesPage = () => {
  return (
    <>
      <Breadcamp title={"Our Services"} subTitle="service" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div>
          <h2 className="font-tiroBangla text-3xl md:text-4xl font-bold mb-2">
            {services.serviceTitle}
          </h2>
          <p className="font-tiroBangla text-lg md:text-xl">
            {services.serviceExerpt}
          </p>
        </div>
        <div className="mt-10 pt-2 border-t border-primary/10">
          <ul className="grid md:grid-cols-3 gap-y-2.5 font-medium hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-start [&_svg]:mt-1">
            {services.serviceItems.map((item, index) => (
              <li key={index}>
                <RiArrowDropRightLine />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SpotlightSection data={spotlightData} />
      <SpotlightSection data={spotlightData2} layout="reverse" />
    </>
  );
};

export default ServicesPage;
