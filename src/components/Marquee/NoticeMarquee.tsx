import React from "react";
import Marquee from "react-fast-marquee";

const notice = [
  "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ",
  "জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।",
  "মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, ",
  "মানুষকে দেখতে হল খুব ছোটো, কিন্তু সেটা একটা কৌশল মাত্র। এবারকার জীবযাত্রার পালায় বিপুলতাকে করা হল বহুলতায় পরিণত। মহাকায় জন্তু ছিল প্রকাণ্ড একলা, মানুষ হল দূরপ্রসারিত অনেক।",
];

const NoticeMarquee = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-2 flex flex-nowrap items-center font-tiroBangla">
      <span className="h-full w-[160px] bg-gradient-to-r from-primary to-[#07CCEC] flex flex-col justify-center px-5 py-2 text-white text-lg font-medium">
        সর্বশেষ নোটিশ
      </span>
      <Marquee speed={100} className="text-lg font-medium text-secondary">
        {notice?.map((item) => "🚀 " + item).join(" || ")}
      </Marquee>
    </div>
  );
};

export default NoticeMarquee;
