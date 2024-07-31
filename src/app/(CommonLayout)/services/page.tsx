import React from "react";
import Breadcamp from "@/utils/Breadcamp";
import { Image } from "@nextui-org/react";
import { RiArrowDropRightLine } from "react-icons/ri";

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
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-10">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-14">
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
              Doctors
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-1.5 md:mt-3 mb-3 lg:mb-7">
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
            <ul className="mt-2 md:mt-5 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-start [&_svg]:mt-1">
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
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-14">
          <div className="order-2 md:order-1">
            <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
              Machines
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-1.5 md:mt-3 mb-3 lg:mb-7">
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
            <ul className="mt-2 md:mt-5 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-start [&_svg]:mt-1">
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
          </div>
          <div className="order-1 md:order-2">
            <Image
              removeWrapper
              className="w-full object-cover"
              src={"https://labonehospital.com/admin/machineimage/machine1.jpg"}
              alt="Services image"
            />
          </div>
        </div>
      </div>
      {/* <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-14">
          <div>
            <Image
              removeWrapper
              className="w-full object-cover"
              src={"https://labonehospital.com/img/bg/illlustration.jpg"}
              alt="Services image"
            />
          </div>
          <div>
            <h6 className="font-medium uppercase text-primary tracking-[2px] py-2.5 px-5 inline-block transition-all cursor-w-resize relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
              About us
            </h6>
            <h2 className="text-5xl font-bold mt-3 mb-7">
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
            <ul className="mt-2 md:mt-5 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
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
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ServicesPage;
